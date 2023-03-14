import { QuoteRequest } from 'cofe-ct-b2b-ecommerce/types/quotes/QuoteRequest';
import { Quote } from 'cofe-ct-b2b-ecommerce/types/quotes/Quote';

export interface UseQuotes {
  getMyQuoteRequests: () => Promise<QuoteRequest[]>;
  getBusinessUserQuoteRequests: (keys: string[]) => Promise<QuoteRequest[]>;
  updateQuoteState: (id: string, state: string) => Promise<Quote>;
}
