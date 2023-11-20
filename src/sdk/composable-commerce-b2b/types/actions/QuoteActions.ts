import { SDKResponse, ServerOptions } from '@commercetools/frontend-sdk';
import { Quote, QuoteRequest, Result } from '@shared/types/quote';
import { CreateQuotePayload, RenegotiateQuotePayload } from '../payloads/QuotePayloads';
import {
  AcceptQuoteQuery,
  QuoteQueryQuery,
  QuoteRequestsQueryQuery,
  DeclineQuoteQuery,
  RenegotiateQuoteQuery,
  CancelQuoteQuery,
} from '../queries/QuoteQueries';

type CreateQuoteAction = (
  payload: CreateQuotePayload,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<QuoteRequest>>;

type QuoteQueryAction = (
  query: QuoteQueryQuery,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<Result>>;

type QuoteRequestsQueryAction = (
  query: QuoteRequestsQueryQuery,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<Result>>;

type AcceptQuoteAction = (
  query: AcceptQuoteQuery,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<Quote>>;

type DeclineQuoteAction = (
  query: DeclineQuoteQuery,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<Quote>>;

type RenegotiateQuoteAction = (
  payload: RenegotiateQuotePayload,
  query: RenegotiateQuoteQuery,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<Quote>>;

type CancelQuoteAction = (
  query: CancelQuoteQuery,
  options?: {
    serverOptions?: ServerOptions;
  },
) => Promise<SDKResponse<QuoteRequest>>;

export {
  type CreateQuoteAction,
  type QuoteQueryAction,
  type QuoteRequestsQueryAction,
  type AcceptQuoteAction,
  type DeclineQuoteAction,
  type RenegotiateQuoteAction,
  type CancelQuoteAction,
};
