import { Quote } from '@Types/quote/Quote';
import { QuoteRequest } from '@Types/quote/QuoteRequest';

export interface UseQuotes {
  getMyQuoteRequests: () => Promise<Quote[]>;
  acceptQuote: (id: string) => Promise<Quote>;
  declineQuote: (id: string) => Promise<Quote>;
  cancelQuoteRequest: (id: string) => Promise<QuoteRequest>;
}
