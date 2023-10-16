import { sdk } from '@/sdk';
import useSWR from 'swr';
import { Result } from '@shared/types/quote/Result';
import { QuoteRequest } from '@shared/types/quote/QuoteRequest';
import { Quote } from '@shared/types/quote/Quote';
import { Options } from './types';

const useQuotes = ({ cursor, limit, states, ids }: Options) => {
  const quotesResponse = useSWR(['/action/quote/query', limit, cursor, ids, states], () =>
    sdk.callAction<Result & { items: QuoteRequest }>({
      actionName: 'quote/query',
      query: {
        ...(limit ? { limit } : {}),
        ...(cursor ? { cursor } : {}),
        ...(ids ? { quoteIds: ids } : {}),
        ...(states ? { quoteStates: states } : {}),
      },
    }),
  );

  const quoteRequestsResponse = useSWR(['/action/quote/queryQuoteRequests', limit, cursor, ids, states], () =>
    sdk.callAction<Result & { items: QuoteRequest }>({
      actionName: 'quote/queryQuoteRequests',
      query: {
        ...(limit ? { limit } : {}),
        ...(cursor ? { cursor } : {}),
        ...(ids ? { quoteIds: ids } : {}),
        ...(states ? { quoteStates: states } : {}),
      },
    }),
  );

  const quotes = quotesResponse.data?.isError
    ? ({} as Partial<Result & { items: Quote }>)
    : quotesResponse.data?.data ?? ({} as Partial<Result & { items: Quote }>);

  const quoteRequests = quoteRequestsResponse.data?.isError
    ? ({} as Partial<Result & { items: QuoteRequest }>)
    : quoteRequestsResponse.data?.data ?? ({} as Partial<Result & { items: QuoteRequest }>);

  return { quotes, quoteRequests };
};

export default useQuotes;
