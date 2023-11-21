import React from 'react';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import ActivityLog from '@/components/molecules/activity-log';
import Image from '@/components/atoms/Image';
import useFormat from '@/hooks/useFormat';
import { QuoteDetailsPageProps } from './types';
import QuoteStatusTag from '../../components/quote-status-tag';
import PreviousPageLink from '../../components/previous-page-link';

const QuoteDetailsPage = ({
  quote,
  onAccept,
  onCommentUpdate,
  onReject,
  onRenegotiate,
  onRevoke,
}: QuoteDetailsPageProps) => {
  const { translate } = useTranslation();

  const { formatCurrency } = useFormat();

  if (!quote) return <></>;

  return (
    <div>
      <div className="flex items-center justify-between py-6 md:py-7 lg:py-9">
        <h1 className="text-18 font-extrabold leading-[100%] text-gray-800 md:text-20 lg:text-24">
          {translate('dashboard.quote.details')}
        </h1>
        <PreviousPageLink className="hidden md:block" />
      </div>
      <h3 className="text-14 text-gray-600">
        {translate('dashboard.quote.id')}: {quote.id}
      </h3>

      <h3 className="mt-2 flex items-center gap-2">
        <span className="text-14 text-gray-600">{translate('common.status')}:</span>
        <QuoteStatusTag status={quote.status} />
      </h3>

      <div className="mt-6 border-y border-neutral-400 pb-9">
        <h5 className="pb-7 pt-6 text-gray-700">{translate('common.activity')}</h5>

        <div className="pl-[10px]">
          <ActivityLog
            activities={quote.activity.map(
              ({ title, date, author, comment, commentBy, reply, renegotiate, revoke }) => ({
                title: translate(title),
                summary: date || author ? `${date ?? ''} - ${translate('common.by')} ${author ?? ''}` : '',
                comment,
                commentLabel: `${translate('common.comment.by')} ${translate(
                  commentBy === 'author' ? 'common.author' : 'common.seller',
                )}`,
                commentDisabled: commentBy !== 'author',
                onCommentUpdate,
                reply,
                onAccept,
                onReject,
                ctaLink:
                  renegotiate || revoke ? translate(`dashboard.cta.${renegotiate ? 'renegotiate' : 'revoke'}`) : '',
                onCtaLinkClick: renegotiate || revoke ? (renegotiate ? onRenegotiate : onRevoke) : undefined,
              }),
            )}
          />
        </div>
      </div>

      <div>
        <h5 className="pb-7 pt-6 text-gray-700">
          {translate('dashboard.items.quoted')} <span className="text-gray-600">({quote.items.length})</span>
        </h5>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full">
            <thead>
              <tr className="p-4 text-12 uppercase text-gray-500 shadow-[0px_-1px_0px_0px_#E4E4E7_inset]">
                <th className="p-4 text-left font-semibold">{translate('common.product')}</th>
                <th className="p-4 text-left font-semibold">{translate('common.sku')}</th>
                <th className="p-4 text-right font-semibold">{translate('common.qty')}</th>
                <th className="p-4 text-right font-semibold">{translate('common.price')}</th>
                <th className="p-4 text-right font-semibold">{translate('common.total')}</th>
              </tr>
            </thead>
            <tbody>
              {quote.items.map(({ id, image, name, sku, quantity, price, currency }) => (
                <tr key={id} className="p-4 text-14 text-gray-600 shadow-[0px_-1px_0px_0px_#E4E4E7_inset]">
                  <td className="whitespace-pre p-4 text-left">
                    <div className="flex items-center gap-3">
                      <span className="relative block h-[40px] w-[40px]">
                        <Image src={image} fill alt={name ?? ''} />
                      </span>
                      <span>{name}</span>
                    </div>
                  </td>
                  <td className="whitespace-pre p-4 text-left">{sku}</td>
                  <td className="p-4 text-right">{quantity}</td>
                  <td className="p-4 text-right">{formatCurrency(price ?? 0, currency ?? 'USD')}</td>
                  <td className="p-4 text-right lg:table-cell">
                    {formatCurrency((price ?? 0) * (quantity ?? 1), currency ?? 'USD')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end border-neutral-400 pb-7 pt-6">
        <div className="flex w-full flex-col gap-2 md:px-4 lg:w-[420px] lg:pl-0">
          <div className="flex items-center justify-between text-14 text-gray-600">
            <span>{translate('common.subtotal')}</span>
            <span>{formatCurrency(quote.subtotal, quote.currency)}</span>
          </div>

          {quote.shippingCosts && (
            <div className="flex items-center justify-between text-14 text-gray-600">
              <span>{translate('common.shipping')}</span>
              <span>{formatCurrency(quote.shippingCosts, quote.currency)}</span>
            </div>
          )}

          {quote.taxCosts && (
            <div className="flex items-center justify-between text-14 text-gray-600">
              <span>{translate('common.tax')}</span>
              <span>{formatCurrency(quote.taxCosts, quote.currency)}</span>
            </div>
          )}

          <div className="flex items-center justify-between font-medium text-gray-700">
            <span>{translate('common.total')}:</span>
            <span>{formatCurrency(quote.total, quote.currency)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDetailsPage;
