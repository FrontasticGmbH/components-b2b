import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';

interface QuoteData {
  isAvailable: boolean;
  createdAt: string;
  status?: string;
}

interface Props {
  data: {
    quoteRequest: QuoteData;
    quote: QuoteData;
  };
}

export const QuoteHistory: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <div className={`h-8 w-8 rounded-full ${data.quoteRequest.isAvailable ? 'bg-accent-400' : 'bg-gray-200'}`} />
        {/*<div className={`h-2 grow border-y-4 ${data.stagedQuote.isAvailable ? 'border-accent-400' : 'bg-gray-200'}`} />*/}
        {/*<div className={`h-8 w-8 rounded-full ${data.stagedQuote.isAvailable ? 'bg-accent-400' : 'bg-gray-200'}`} />*/}
        <div className={`h-2 grow border-y-4 ${data.quote.isAvailable ? 'border-accent-400' : 'bg-gray-200'}`} />
        <div className={`h-8 w-8 rounded-full ${data.quote.isAvailable ? 'bg-accent-400' : 'bg-gray-200'}`}>
          {data.quote.isAvailable && data.quote.status === 'Accepted' && (
            <CheckIcon className="ml-2 mt-2 h-4 w-4 text-green-300" />
          )}
          {data.quote.isAvailable && data.quote.status === 'Declined' && (
            <XIcon className="ml-2 mt-2 h-4 w-4 text-red-300" />
          )}
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="">
          <div className={`${data.quoteRequest.isAvailable ? 'text-black' : 'text-gray-400'}`}>
            {data.quoteRequest?.status || 'Submitted'}
          </div>
          <div className="text-xs text-gray-400">{new Date(data.quoteRequest.createdAt).toLocaleString()}</div>
        </div>
        <div className="h-4 grow" />
        {/*<div className="text-center">*/}
        {/*  <div className={`${data.stagedQuote.isAvailable ? 'text-black' : 'text-gray-400'}`}>*/}
        {/*    {data.stagedQuote?.status || 'In progress'}*/}
        {/*  </div>*/}
        {/*  {data.stagedQuote.isAvailable && (*/}
        {/*    <div className="text-xs text-gray-400">{new Date(data.stagedQuote.createdAt).toLocaleString()}</div>*/}
        {/*  )}*/}
        {/*</div>*/}
        <div className="h-4 grow" />
        <div className="text-right">
          <div className={`${data.quote.isAvailable ? 'text-black' : 'text-gray-400'}`}>
            {data.quote?.status || 'Pending'}
          </div>
          {data.quote.isAvailable && (
            <div className="text-xs text-gray-400">{new Date(data.quote.createdAt).toLocaleString()}</div>
          )}
        </div>
      </div>
    </div>
  );
};
