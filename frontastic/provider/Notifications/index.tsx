import { Context, createContext, useContext, useEffect, useState } from 'react';
import { Client, ConnectionState, Conversation, Message } from '@twilio/conversations';
import { useAccount } from 'helpers/hooks/useAccount';
import toast from 'react-hot-toast';
import { BellIcon } from '@heroicons/react/solid';

const NotificationContext: Context<{
  setToken: (token: string) => void;
  conversation: Conversation;
  unreadMessageCount: number;
  isInitialized: boolean;
  messages: Message[];
  markMessgaeAsRead: (message: Message) => void;
}> = createContext({
  setToken: () => null,
  markMessgaeAsRead: () => null,
  conversation: null,
  unreadMessageCount: 0,
  isInitialized: false,
  messages: null,
});

export const NotificationProvider = ({ children }) => {
  const { account } = useAccount();
  const [isInitialized, setIsInitialized] = useState(false);
  const [token, setToken] = useState('');
  const [client, setClient] = useState<Client>();
  const [connectionState, setConnectionState] = useState<ConnectionState>();
  const [conversation, setConversation] = useState<Conversation>();
  const [messages, setMessages] = useState<Message[]>();
  const [unreadMessageCount, setUnreadMessageCount] = useState<number>(0);

  const fetchMessages = async (conversation: Conversation): Promise<Message[]> => {
    try {
      const conversationMessages = await conversation.getMessages();
      const messageList = conversationMessages.items?.filter((message) => !message.attributes['archived']);
      setMessages(messageList);
      return messageList;
    } catch {
      setMessages([]);
      return [];
    }
  };

  const fetchConversations = async (client: Client) => {
    try {
      const conv = await client.getConversationByUniqueName(account?.email);
      const messagesList = await fetchMessages(conv);
      if (messagesList?.length) {
        const lastReadMessageIndex = conv.lastReadMessageIndex ?? -1;
        const lastMessage = conv.lastMessage;
        setUnreadMessageCount(lastMessage.index - lastReadMessageIndex);
      }

      setConversation(conv);
    } catch (error) {
      console.log(error);
    }
  };

  const markMessgaeAsRead = async (message: Message) => {
    const count = await conversation.advanceLastReadMessageIndex(message?.index);
    setUnreadMessageCount(count);
  };

  useEffect(() => {
    if (token) {
      const client = new Client(token);

      client.on('messageAdded', () => {
        toast.success('You received a new notification', {
          position: 'top-right',
          duration: 1000 * 4,
          icon: <BellIcon className="shake h-6 w-6 text-red-600" />,
        });

        fetchConversations(client);
      });

      client.on('messageRemoved', () => {
        fetchConversations(client);
      });

      client.on('messageUpdated', () => {
        fetchConversations(client);
      });

      client.on('tokenAboutToExpire', () => {
        // TODO: reissue token
        console.log('TOKEN IS ABOUT TO EXPIRE');
      });

      client.on('tokenExpired', () => {
        // TODO: reissue token
        console.log('TOKEN IS ABOUT TO EXPIRE');
      });

      client.on('initialized', () => {
        console.log('CLIENT INITALIZED');
        setClient(client);

        fetchConversations(client);
        setIsInitialized(true);
      });

      client.on('conversationAdded', () => {
        fetchConversations(client);
      });

      client.on('connectionStateChanged', (state) => {
        setConnectionState(state);
      });
    }
    return () => {
      setUnreadMessageCount(0);
    };
  }, [token]);

  return (
    <NotificationContext.Provider
      value={{
        markMessgaeAsRead,
        setToken,
        conversation,
        unreadMessageCount,
        isInitialized,
        messages,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
