import { QuoteRequest } from '@Types/quotes/QuoteRequest';
import { DeprecatedQuote } from '@Types/quotes/DeprecatedQuote';

export interface UseQuotes {
  getMyQuoteRequests: () => Promise<QuoteRequest[]>;
  getBusinessUserQuoteRequests: (keys: string[]) => Promise<QuoteRequest[]>;
  updateQuoteState: (id: string, state: string) => Promise<DeprecatedQuote>;
  updateQuoteRequestState: (id: string, state: string) => Promise<QuoteRequest>;
}
