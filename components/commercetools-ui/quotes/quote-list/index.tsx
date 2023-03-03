/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/outline';
import { LineItem } from '@Types/cart/LineItem';
import { QuoteRequest } from '@Types/quotes/QuoteRequest';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import QuoteDetails from '../details';
import styles from './index.module.css';

interface Props {
  quoteRequestList: QuoteRequest[];
}

const QuoteList: React.FC<Props> = ({ quoteRequestList }) => {
  const [isQuoteRequestDetailsOpen, setIsQuoteRequestDetailsOpen] = useState(false);
  const [currentSelectedQuoteRequest, setCurrentSelectedQuoteRequest] = useState<QuoteRequest>(null);
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
            <th>Date</th>
            <th>Buyer</th>
            <th style={{ width: '15%' }}>Company/Division</th>
            <th>Account</th>
            <th style={{ width: '5%' }}>Count</th>
            <th style={{ width: '10%' }} className="text-ellipsis-150">
              Comment
            </th>
            <th>Price</th>
            <th>Status</th>
            <th style={{ width: '5%' }}></th>
          </tr>
        </thead>
        <tbody>
          {quoteRequestList.map((quote) => (
            <tr className={`${styles.row} ${quote.highlight && 'highlight'}`} key={quote.id}>
              <td>{new Date(quote.createdAt).toLocaleString()}</td>
              {/* @ts-ignore */}
              <td className={styles.trim}>{quote.customer.email}</td>
              {/* @ts-ignore */}
              <td className={styles.trim}>{quote.businessUnit.key}</td>
              <td className={styles.trim}>{quote.store.key}</td>
              <td>{getTotalLineItems(quote.lineItems)}</td>
              <td className={styles.trim}>{quote.comment}</td>
              <td>{CurrencyHelpers.formatForCurrency(quote.totalPrice)}</td>
              <td className="text-green-300">{quote.quoteRequestState}</td>
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
        data={currentSelectedQuoteRequest}
        onClose={() => setIsQuoteRequestDetailsOpen(false)}
      />
    </>
  );
};

export default QuoteList;
