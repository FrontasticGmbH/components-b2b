import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QuoteRequest } from 'cofe-ct-b2b-ecommerce/types/quotes/QuoteRequest';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import QuoteList from 'components/commercetools-ui/quotes/quote-list';
import useFilters from 'helpers/hooks/useFilters';
import { useFormat } from 'helpers/hooks/useFormat';
import { useQuotes, useAccount } from 'frontastic';

const QuotesHistory: FC = () => {
  const { account } = useAccount();
  const router = useRouter();
  const { getMyQuoteRequests } = useQuotes();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const [isLoading, setIsLoading] = useState(false);
  const [quoteList, setQuoteList] = useState<QuoteRequest[]>([]);
  const { FiltersUI, filteredItems } = useFilters<QuoteRequest>(
    [
      {
        label: formatAccountMessage({ id: 'submitted', defaultMessage: 'Submitted' }),
        key: 'submitted',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Submitted',
      },
      {
        label: formatAccountMessage({ id: 'in.progress', defaultMessage: 'In progress' }),
        key: 'in-progress',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'InProgress',
      },
      {
        label: formatAccountMessage({ id: 'sent', defaultMessage: 'Sent' }),
        key: 'sent',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Sent',
      },
      {
        label: formatAccountMessage({ id: 'accepted', defaultMessage: 'Accepted' }),
        key: 'accepted',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Accepted',
      },
      {
        label: formatAccountMessage({ id: 'declined', defaultMessage: 'Declined' }),
        key: 'declined',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Declined',
      },
    ],
    quoteList,
  );

  useEffect(() => {
    const highlightId = router.query?.id;
    if (account?.accountId) {
      (async () => {
        setIsLoading(true);
        const results = await getMyQuoteRequests();
        if (highlightId) {
          setQuoteList(
            results.map((quote) => ({
              ...quote,
              highlight: quote.id === highlightId,
            })),
          );
        } else {
          setQuoteList(results);
        }
        setIsLoading(false);
      })();
    }
  }, [account?.accountId]);

  if (!account?.accountId) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
          {formatAccountMessage({ id: 'my.quotes', defaultMessage: 'My quotes' })}
        </h3>
        <p className="max-w-2xl text-sm text-gray-500">
          {formatAccountMessage({
            id: 'quotes.desc',
            defaultMessage: 'Check the status of quote-requests, accept or decline quotes.',
          })}
        </p>
      </div>
      <div className="divide-y divide-gray-200"></div>
      <div className="flex items-stretch justify-center py-10">
        {isLoading && <LoadingIcon className="h-8 w-8 text-gray-500" />}
        {!isLoading && !quoteList?.length && (
          <div>{formatAccountMessage({ id: 'no.quotes.yet', defaultMessage: 'You have no quotes yet' })}</div>
        )}
        {!isLoading && !!quoteList?.length && (
          <div>
            <div className="mb-4 border-y-2 py-2">
              <p className="mb-2">{formatAccountMessage({ id: 'filters', defaultMessage: 'Filters' })}</p>
              <div className="flex flex-row flex-wrap">
                <FiltersUI />
              </div>
            </div>
            <QuoteList quoteRequestList={filteredItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotesHistory;
