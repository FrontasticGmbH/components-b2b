import { DeprecatedQuoteRequest } from '@Types/quote/DeprecatedQuoteRequest';
import { DeprecatedQuote } from '@Types/quote/DeprecatedQuote';
import { Quote } from '@Types/quote/Quote';

export interface UseQuotes {
  getMyQuoteRequests: () => Promise<Quote[]>;
  updateQuoteState: (id: string, state: string) => Promise<DeprecatedQuote>;
  updateQuoteRequestState: (id: string, state: string) => Promise<DeprecatedQuoteRequest>;
}
