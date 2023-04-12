import BusinessUnitRole from 'components/commercetools-ui/business-unit/role';
import { useAccount } from 'helpers/hooks/useAccount';
import { useFormat } from 'helpers/hooks/useFormat';
import { GlobeIcon, TranslateIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import AccountButton from 'components/commercetools-ui/header/account-button';
import NotificationButton from 'components/commercetools-ui/notifications/notification-button';
import { useNotifications } from 'frontastic/provider/Notifications';

type Props = {
  data: any;
};

const UserBarTastic: React.FC<Props> = ({ data }) => {
  const { account } = useAccount();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { setToken } = useNotifications();

  const organization = data.organization?.dataSource?.organization;
  const notificationToken = data.notifications?.dataSource?.notificationToken;

  useEffect(() => {
    if (notificationToken) {
      setToken(notificationToken);
    }
  }, []);

  return (
    <div className={`flex h-full flex-row items-center justify-end ${data.bgColor}`}>
      <span>
        {account?.firstName
          ? formatAccountMessage({ id: 'welcome', defaultMessage: 'Welcome, ' }) + account?.firstName
          : account?.lastName
          ? formatAccountMessage({ id: 'welcome', defaultMessage: 'Welcome, ' }) + account?.lastName
          : formatAccountMessage({ id: 'welcome', defaultMessage: 'Welcome, ' }) +
            formatAccountMessage({ id: 'user', defaultMessage: 'User ' })}
      </span>
      <span className="inline-flex items-center px-2">
        <BusinessUnitRole organization={data.organization?.dataSource?.organization} />
        <AccountButton
          account={account}
          accountLink={data.accountLink}
          organization={organization}
          businessUnitLink={data.businessUnitLink}
        />
        <NotificationButton className="ml-2" />
      </span>
      <span className="inline-flex items-center px-2">
        <GlobeIcon className="mr-1 inline h-4 w-4 text-accent-400" />
        <span className="">US</span>
      </span>
      <span className="inline-flex items-center px-2">
        <TranslateIcon className="mr-1 inline h-4 w-4 text-accent-400" />
        <span className="">EN</span>
      </span>
    </div>
  );
};

export default UserBarTastic;
