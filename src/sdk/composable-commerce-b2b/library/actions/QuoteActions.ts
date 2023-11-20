import { SDK, ServerOptions } from '@commercetools/frontend-sdk';
import { ComposableCommerceEventsB2B } from '../../types/events/ComposableCommerceEventsB2B';
import {
  CreateQuoteAction,
  QuoteQueryAction,
  QuoteRequestsQueryAction,
  AcceptQuoteAction,
  DeclineQuoteAction,
  RenegotiateQuoteAction,
  CancelQuoteAction,
} from '../../types/actions/QuoteActions';
import { CreateQuotePayload, RenegotiateQuotePayload } from '../../types/payloads/QuotePayloads';
import {
  AcceptQuoteQuery,
  QuoteQueryQuery,
  QuoteRequestsQueryQuery,
  DeclineQuoteQuery,
  RenegotiateQuoteQuery,
  CancelQuoteQuery,
} from '../../types/queries/QuoteQueries';
import { Quote, QuoteRequest, Result } from '@shared/types/quote';

export type QuoteActions = {
  createQuote: CreateQuoteAction;
  query: QuoteQueryAction;
  queryRequests: QuoteRequestsQueryAction;
  acceptQuote: AcceptQuoteAction;
  declineQuote: DeclineQuoteAction;
  renegotiateQuote: RenegotiateQuoteAction;
  cancelQuote: CancelQuoteAction;
};

export const getQuoteActions = (sdk: SDK<ComposableCommerceEventsB2B>): QuoteActions => {
  return {
    createQuote: async (payload: CreateQuotePayload, options: { serverOptions?: ServerOptions } = {}) => {
      const response = await sdk.callAction<QuoteRequest>({
        actionName: 'quote/createQuoteRequest',
        payload,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    query: async (query: QuoteQueryQuery, options: { serverOptions?: ServerOptions } = {}) => {
      const response = await sdk.callAction<Result>({
        actionName: 'quote/query',
        query,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    queryRequests: async (query: QuoteRequestsQueryQuery, options: { serverOptions?: ServerOptions } = {}) => {
      const response = await sdk.callAction<Result>({
        actionName: 'quote/queryQuoteRequests',
        query,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    acceptQuote: async (query: AcceptQuoteQuery, options: { serverOptions?: ServerOptions } = {}) => {
      const response = await sdk.callAction<Quote>({
        actionName: 'quote/acceptQuote',
        query,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    declineQuote: async (query: DeclineQuoteQuery, options: { serverOptions?: ServerOptions } = {}) => {
      const response = await sdk.callAction<Quote>({
        actionName: 'quote/declineQuote',
        query,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    renegotiateQuote: async (
      payload: RenegotiateQuotePayload,
      query: RenegotiateQuoteQuery,
      options: { serverOptions?: ServerOptions } = {},
    ) => {
      const response = await sdk.callAction<Quote>({
        actionName: 'quote/renegotiateQuote',
        payload,
        query,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    cancelQuote: async (query: CancelQuoteQuery, options: { serverOptions?: ServerOptions } = {}) => {
      const response = await sdk.callAction<QuoteRequest>({
        actionName: 'quote/cancelQuoteRequest',
        query,
        serverOptions: options.serverOptions,
      });
      return response;
    },
  };
};
