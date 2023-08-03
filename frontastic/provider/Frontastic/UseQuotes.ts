import { DeprecatedQuote } from '@Types/quote/DeprecatedQuote';
import { Quote } from '@Types/quote/Quote';

export interface UseQuotes {
  getMyQuoteRequests: () => Promise<Quote[]>;
  updateQuoteState: (id: string, state: string) => Promise<DeprecatedQuote>;
  cancelQuoteRequest: (id: string) => Promise<Quote>;
}
