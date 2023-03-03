import { QuoteRequest } from '@Types/quotes/QuoteRequest';
import { Quote } from '@Types/quotes/Quote';

export interface UseQuotes {
  getMyQuoteRequests: () => Promise<QuoteRequest[]>;
  getBusinessUserQuoteRequests: (keys: string[]) => Promise<QuoteRequest[]>;
  updateQuoteState: (id: string, state: string) => Promise<Quote>;
}
