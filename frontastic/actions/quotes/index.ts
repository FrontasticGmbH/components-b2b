import { DeprecatedQuote } from '@Types/quote/DeprecatedQuote';
import { DeprecatedQuoteRequest } from '@Types/quote/DeprecatedQuoteRequest';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { Quote } from '@Types/quote/Quote';

export const getMyQuoteRequests = async (): Promise<Quote[]> => {
  return await fetchApiHub('/action/quote/getQuotes', { method: 'GET' });
};

export const updateQuoteState = async (id: string, state: string): Promise<DeprecatedQuote> => {
  return await fetchApiHub(`/action/quote/updateQuoteState?id=${id}`, { method: 'POST' }, { state });
};

export const updateQuoteRequestState = async (id: string, state: string): Promise<DeprecatedQuoteRequest> => {
  return await fetchApiHub(`/action/quote/updateQuoteRequestState?id=${id}`, { method: 'POST' }, { state });
};
