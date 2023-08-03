/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/outline';
import { LineItem } from '@Types/cart/LineItem';
import { Quote } from '@Types/quote/Quote';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import QuoteDetails from '../details';
import styles from './index.module.css';

interface Props {
  quoteList: Quote[];
}

const QuoteList: React.FC<Props> = ({ quoteList }) => {
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const [isQuoteRequestDetailsOpen, setIsQuoteRequestDetailsOpen] = useState(false);
  const [currentSelectedQuoteRequest, setCurrentSelectedQuoteRequest] = useState<Quote>(null);
  const openQuoteRequestDetails = (quoteRequest) => {
    setCurrentSelectedQuoteRequest(quoteRequest);
    setIsQuoteRequestDetailsOpen(true);
    setIsQuoteRequestDetailsOpen(true);
  };

  const getTotalLineItems = (lineItems: LineItem[]): number => {
    return lineItems.reduce((prev, curr) => prev + curr.count, 0);
  };

  return (
    <>
      <table className="table-primary w-full table-fixed border">
        <thead>
          <tr>
            <th>{formatAccountMessage({ id: 'date', defaultMessage: 'Date' })}</th>
            <th>{formatAccountMessage({ id: 'buyer', defaultMessage: 'Buyer' })}</th>
            <th style={{ width: '15%' }}>
              {formatAccountMessage({ id: 'company.or.division', defaultMessage: 'Company/Division' })}
            </th>
            <th>{formatAccountMessage({ id: 'account', defaultMessage: 'Account' })}</th>
            <th style={{ width: '7%' }}>{formatAccountMessage({ id: 'count', defaultMessage: 'Count' })}</th>
            <th style={{ width: '15%' }} className="text-ellipsis-150">
              {formatAccountMessage({ id: 'comment', defaultMessage: 'Comment' })}
            </th>
            <th>{formatAccountMessage({ id: 'price', defaultMessage: 'Price' })}</th>
            <th>{formatAccountMessage({ id: 'status', defaultMessage: 'Status' })}</th>
            <th style={{ width: '5%' }}></th>
          </tr>
        </thead>
        <tbody>
          {quoteList.map((quote: Quote) => (
            <tr className={`${styles.row}`} key={quote.quoteRequestId}>
              <td>{new Date(quote.createdAt).toLocaleString()}</td>
              {/* @ts-ignore */}
              <td className={styles.trim}>{quote.account.email}</td>
              {/* @ts-ignore */}
              <td className={styles.trim}>{quote.businessUnit.key}</td>
              <td className={styles.trim}>{quote.store.key}</td>
              <td>{getTotalLineItems(quote.lineItems)}</td>
              <td className={styles.trim}>{quote.buyerComment}</td>
              <td>{CurrencyHelpers.formatForCurrency(quote.sum)}</td>
              <td className="text-green-300">{quote.quoteState ?? quote.state}</td>
              <td>
                <button type="button" onClick={() => openQuoteRequestDetails(quote)}>
                  <EyeIcon className="h-4 w-4 text-black" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <QuoteDetails
        open={isQuoteRequestDetailsOpen}
        quote={currentSelectedQuoteRequest}
        onClose={() => setIsQuoteRequestDetailsOpen(false)}
      />
    </>
  );
};

export default QuoteList;
