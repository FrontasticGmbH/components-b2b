import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Transition, Dialog } from '@headlessui/react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import { LoadingIcon } from 'components/commercetools-ui/icons/loading';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useCart, useDarkMode, useQuotes } from 'frontastic';
import { QuoteHistory } from '../history';
import { QuoteItems } from '../quote-items';
import { Quote } from '@Types/quote/Quote';

interface Props {
  open: boolean;
  onClose: () => void;
  quote: Quote;
}

const QuoteDetails: React.FC<Props> = ({ open, onClose, quote }) => {
  const { mode } = useDarkMode();
  const { updateQuoteState, updateQuoteRequestState } = useQuotes();
  const router = useRouter();
  const { getCart } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmationDisplayed, setIsConfirmationDisplayed] = useState(false);
  const [isCancellationDisplayed, setIsCancellationDisplayed] = useState(false);

  const handleUpdateQuote = async (id, state) => {
    setIsLoading(true);
    await updateQuoteState(id, state);
    setIsLoading(false);
    setIsConfirmationDisplayed(true);
  };

  const handleUpdateQuoteRequest = async (id, state) => {
    setIsLoading(true);
    await updateQuoteRequestState(id, state);
    setIsLoading(false);
    setIsCancellationDisplayed(true);
  };

  const quoteHistoryData = {
    quoteRequest: {
      isAvailable: true,
      createdAt:
        new Date(quote?.quoteDraftLastModifiedAt).toDateString() || new Date(quote?.quoteDraftCreatedAt).toDateString(),
      status: quote?.quoteDraftState,
    },
    quote: {
      isAvailable: !!quote?.quoteId,
      createdAt: new Date(quote?.quoteLastModifiedAt).toDateString() || new Date(quote?.quoteCreatedAt).toDateString(),
      status: quote?.quoteState,
    },
  };

  const hasAnyComments = () => {
    return !!quote?.buyerComment || !!quote?.sellerComment;
  };

  const handleClose = async () => {
    if (isConfirmationDisplayed) {
      try {
        await getCart();
        router.replace(
          {
            pathname: '/checkout',
          },
          undefined,
          {
            shallow: false,
          },
        );
      } catch (e) {
        console.error(e);
      }
    }
    setIsCancellationDisplayed(false);
    setIsConfirmationDisplayed(false);
    onClose();
  };

  if (!quote) {
    return null;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className={`${mode} default fixed inset-0 z-10 overflow-y-auto`} onClose={onClose}>
        <Transition.Root>
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-left sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="absolute inset-0" onClick={handleClose}>
                {/* eslint-disable */}
                <div
                  className="absolute top-1/2 left-1/2 max-h-[90vh] w-[90%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white py-16 px-4 dark:bg-primary-200 sm:px-6 lg:py-24 lg:px-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* eslint-enable */}
                  {!isConfirmationDisplayed && !isCancellationDisplayed && (
                    <div className="relative mx-auto max-w-xl">
                      <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                          Quote details
                        </h2>
                      </div>
                      <div className="mt-12">
                        <QuoteHistory data={quoteHistoryData} />
                      </div>
                      {!!quote && quote.quoteState === 'Pending' && (
                        <div>
                          <h3 className="mt-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-light-100">
                            Actions
                          </h3>
                          <div className="flex flex-row justify-between">
                            <button
                              className="button button-secondary flex flex-row"
                              onClick={() => handleUpdateQuote(quote?.quoteId, 'Declined')}
                            >
                              {!isLoading && <XIcon className="h-4 w-4 text-white" />}
                              {isLoading && <LoadingIcon className="h-4 w-4 animate-spin text-white" />}
                              Decline
                            </button>
                            <button
                              className="button button-primary flex flex-row"
                              onClick={() => handleUpdateQuote(quote?.quoteId, 'Accepted')}
                            >
                              {!isLoading && <CheckIcon className="h-4 w-4 text-white" />}
                              {isLoading && <LoadingIcon className="h-4 w-4 animate-spin text-white" />}
                              Accept
                            </button>
                          </div>
                        </div>
                      )}
                      {quote?.quoteDraftState === 'Submitted' && (
                        <div>
                          <h3 className="mt-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-light-100">
                            Actions
                          </h3>
                          <div className="flex flex-row justify-center">
                            <button
                              className="button button-secondary flex flex-row"
                              onClick={() => handleUpdateQuoteRequest(quote?.quoteDraftId, 'Cancelled')}
                            >
                              {!isLoading && <XIcon className="h-4 w-4 text-white" />}
                              {isLoading && <LoadingIcon className="h-4 w-4 animate-spin text-white" />}
                              Withdraw
                            </button>
                          </div>
                        </div>
                      )}
                      <div>
                        {hasAnyComments() && (
                          <>
                            <h3 className="mt-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-light-100">
                              Comments:
                            </h3>
                            <div>
                              {quote?.buyerComment && (
                                <>
                                  <strong>You:</strong>
                                  <span>{quote?.sellerComment || quote?.buyerComment}</span>
                                </>
                              )}
                              {quote?.sellerComment && (
                                <>
                                  <strong>Seller:</strong>
                                  <span>{quote?.sellerComment}</span>
                                </>
                              )}
                            </div>
                          </>
                        )}
                        <h3 className="mt-4 text-xl font-extrabold tracking-tight text-gray-900 dark:text-light-100">
                          Details
                        </h3>
                        <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:flex-none lg:gap-x-8">
                          <div className="flex justify-between pt-6 sm:block sm:pt-0">
                            <dt className="font-medium text-gray-900">Quote request ID</dt>
                            <dd className="sm:mt-1">{quote?.quoteId}</dd>
                          </div>
                          <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                            <dt>Requested total amount</dt>
                            <dd className="sm:mt-1">{CurrencyHelpers.formatForCurrency(quote?.quoteDraftSum)}</dd>
                          </div>
                          {!!quote?.quoteId && (
                            <div className="flex justify-between pt-6 font-medium text-green-400 sm:block sm:pt-0">
                              <dt>Suggested total amount</dt>
                              <dd className="sm:mt-1">{CurrencyHelpers.formatForCurrency(quote?.quoteDraftSum)}</dd>
                            </div>
                          )}
                        </dl>
                        <QuoteItems
                          quoteRequestLineItems={quote?.quoteDraftLineItems}
                          quoteLineItems={quote?.quoteDraftLineItems}
                        />
                      </div>
                    </div>
                  )}
                  {isConfirmationDisplayed && (
                    <div className="relative mx-auto max-w-xl">
                      <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                          Quote accepted!
                        </h2>
                        <div className="mt-12">
                          <span className="text-sm">Please close this window and continue to checkout</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {isCancellationDisplayed && (
                    <div className="relative mx-auto max-w-xl">
                      <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
                          Quote has been withdrawn!
                        </h2>
                        <div className="mt-12">
                          <span className="text-sm">Please close this window.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition.Root>
      </Dialog>
    </Transition.Root>
  );
};

export default QuoteDetails;
