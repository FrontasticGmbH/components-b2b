import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { Quote } from '@Types/quote/Quote';
import { QuoteRequest } from '@Types/quote/QuoteRequest';

export const getQuotes = async (): Promise<Quote[]> => {
  return await fetchApiHub('/action/quote/getQuotes', { method: 'GET' });
};

export const acceptQuote = async (quoteId: string): Promise<Quote> => {
  return await fetchApiHub(`/action/quote/acceptQuote?id=${quoteId}`, { method: 'POST' });
};

export const declineQuote = async (quoteId: string): Promise<Quote> => {
  return await fetchApiHub(`/action/quote/declineQuote?id=${quoteId}`, { method: 'POST' });
};

export const cancelQuoteRequest = async (quoteRequestId: string): Promise<QuoteRequest> => {
  return await fetchApiHub(`/action/quote/cancelQuoteRequest?id=${quoteRequestId}`, { method: 'POST' });
};
