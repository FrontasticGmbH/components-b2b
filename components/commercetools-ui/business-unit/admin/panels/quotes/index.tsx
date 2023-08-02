import React, { useEffect, useState } from 'react';
import { BusinessUnit } from '@Types/business-unit/BusinessUnit';
import { QuoteRequest } from '@Types/quote/QuoteRequest';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import QuoteList from 'components/commercetools-ui/quotes/quote-list';
import useFilters from 'helpers/hooks/useFilters';
import { useFormat } from 'helpers/hooks/useFormat';
import { useQuotes } from 'frontastic';
import { useBusinessUnitDetailsStateContext } from '../../provider';

const QuotesPanel = () => {
  const { selectedBusinessUnit: businessUnit, businessUnitTree } = useBusinessUnitDetailsStateContext();
  const { getBusinessUserQuoteRequests } = useQuotes();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const [isLoading, setIsLoading] = useState(false);
  const [quoteList, setQuoteList] = useState<QuoteRequest[]>([]);
  const [showAllChildQuotes, setShowAllChildQuotes] = useState(false);

  const { FiltersUI, filteredItems, reset } = useFilters<QuoteRequest>(
    [
      {
        label: 'Submitted',
        key: 'submitted',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Submitted',
      },
      {
        label: 'In Progress',
        key: 'in-progress',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'InProgress',
      },
      {
        label: 'Sent',
        key: 'sent',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Sent',
      },
      {
        label: 'Accepted',
        key: 'accepted',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Accepted',
      },
      {
        label: 'Declined',
        key: 'declined',
        value: false,
        predicate: (quote: QuoteRequest) => quote.quoteRequestState === 'Declined',
      },
    ],
    quoteList,
  );

  useEffect(() => {
    if (businessUnit) {
      (async () => {
        setIsLoading(true);
        const results = await getBusinessUserQuoteRequests([businessUnit.key]);
        setQuoteList(results);
        setIsLoading(false);
      })();
    }
  }, [businessUnit]);

  const getAllChildKeys = (businessUnit: BusinessUnit, businessUnitTree: BusinessUnit[]): string[] => {
    let tree = [businessUnit];

    let tempParents = [businessUnit];
    while (tempParents.length) {
      const [current] = tempParents.splice(0, 1);
      const list = businessUnitTree.filter((bu) => bu.parentUnit?.key === current.key);
      if (list.length) {
        tree = tree.concat(list);
        tempParents = tempParents.concat(list);
      }
    }
    return tree.map((bu) => bu.key);
  };

  useEffect(() => {
    if (businessUnit) {
      if (showAllChildQuotes) {
        (async () => {
          setIsLoading(true);
          const results = await getBusinessUserQuoteRequests(getAllChildKeys(businessUnit, businessUnitTree as any));
          setQuoteList(results);
          setIsLoading(false);
        })();
      } else {
        (async () => {
          setIsLoading(true);
          const results = await getBusinessUserQuoteRequests([businessUnit.key]);
          setQuoteList(results);
          setIsLoading(false);
        })();
      }
      reset();
    }
  }, [showAllChildQuotes]);

  if (!businessUnit) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="space-y-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">
          {formatAccountMessage({ id: 'quotes.history', defaultMessage: 'Quotes' })}
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
        {!isLoading && !quoteList?.length && <div>No quotes yet!</div>}
        {!isLoading && !!quoteList?.length && (
          <div>
            <div className="mb-4 border-y-2 py-2">
              <p className="mb-2">Filters</p>
              <div className="flex flex-row flex-wrap">
                <FiltersUI className="flex flex-row flex-wrap gap-0.5" />
              </div>
            </div>
            <QuoteList quoteRequestList={filteredItems} />
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          id="all-quotes"
          checked={showAllChildQuotes}
          onChange={(e) => setShowAllChildQuotes(e.target.checked)}
          className="input input-checkbox mr-4"
        />
        <label htmlFor="all-quotes" className="block text-sm font-medium text-gray-700 dark:text-light-100">
          Show all quotes from divisions?
        </label>
      </div>
    </div>
  );
};

export default QuotesPanel;
