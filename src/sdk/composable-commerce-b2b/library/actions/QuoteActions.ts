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
  CreateQuoteQuery,
  AcceptQuoteQuery,
  QuoteQueryQuery,
  QuoteRequestsQueryQuery,
  DeclineQuoteQuery,
  RenegotiateQuoteQuery,
  CancelQuoteQuery,
} from '../../types/queries/QuoteQueries';
import { Quote, QuoteRequest } from '@shared/types/quote';
import { PaginatedResult } from '@shared/types/result';

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
    createQuote: async (
      payload: CreateQuotePayload,
      query: CreateQuoteQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<QuoteRequest>({
        actionName: 'quote/createQuoteRequest',
        payload,
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    query: async (
      query: QuoteQueryQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<PaginatedResult<Quote>>({
        actionName: 'quote/query',
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    queryRequests: async (
      query: QuoteRequestsQueryQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<PaginatedResult<QuoteRequest>>({
        actionName: 'quote/queryQuoteRequests',
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    acceptQuote: async (
      query: AcceptQuoteQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Quote>({
        actionName: 'quote/acceptQuote',
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    declineQuote: async (
      query: DeclineQuoteQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Quote>({
        actionName: 'quote/declineQuote',
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    renegotiateQuote: async (
      payload: RenegotiateQuotePayload,
      query: RenegotiateQuoteQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<Quote>({
        actionName: 'quote/renegotiateQuote',
        payload,
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
    cancelQuote: async (
      query: CancelQuoteQuery,
      options: {
        skipQueue?: boolean;
        customHeaderValue?: string;
        serverOptions?: ServerOptions;
      } = {},
    ) => {
      const response = await sdk.callAction<QuoteRequest>({
        actionName: 'quote/cancelQuoteRequest',
        query,
        skipQueue: options.skipQueue,
        customHeaderValue: options.customHeaderValue,
        serverOptions: options.serverOptions,
      });
      return response;
    },
  };
};
