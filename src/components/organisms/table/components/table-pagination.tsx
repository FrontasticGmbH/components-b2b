import { SVGAttributes, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'use-intl';
import { classnames } from '@/utils/classnames/classnames';
import Select from '@/components/atoms/select';
import { TablePaginationProps } from '../types';

const TablePagination = ({
  className,
  page = 1,
  limit = 25,
  totalItems = 0,
  onRowsPerPageChange,
  onPrevious,
  onNext,
}: TablePaginationProps) => {
  const translate = useTranslations();

  const { from, to } = useMemo(() => {
    const from = totalItems === 0 ? '0' : ((page - 1) * limit + 1).toString();
    const to = Math.min((page - 1) * limit + limit, totalItems).toString();

    return { from, to };
  }, [limit, page, totalItems]);

  const disableNext = useMemo(() => to === totalItems.toString(), [to, totalItems]);

  const disablePrevious = useMemo(() => page === 1, [page]);

  const previousIconProps: SVGAttributes<SVGElement> = {
    className: classnames('size-6', { 'cursor-pointer': !disablePrevious }),
    stroke: disablePrevious ? '#D1D1D1' : '#212121',
  };

  const nextIconProps: SVGAttributes<SVGElement> = {
    className: classnames('size-6', { 'cursor-pointer': !disableNext }),
    stroke: disableNext ? '#D1D1D1' : '#212121',
  };

  const paginationClassName = classnames(
    'flex w-full flex-col-reverse justify-between py-2 md:flex-row md:gap-0 md:py-6',
    className,
  );

  return (
    <div className={paginationClassName}>
      <div className="mt-2 flex items-center justify-center gap-2 md:mt-0 md:justify-start">
        <p className="text-14 text-gray-700 md:block">{translate('common.rows-per-page')}</p>
        <Select
          onChange={onRowsPerPageChange}
          value={limit.toString()}
          options={[
            { name: '25', value: '25' },
            { name: '50', value: '50' },
            { name: '100', value: '100' },
            { name: 'All', value: totalItems.toString() },
          ]}
          className="w-20"
        />
      </div>
      <div className="flex items-center gap-3 md:gap-9">
        <p className="hidden text-14 text-gray-700 md:flex">
          {translate('common.from-to', {
            from,
            to,
            totalItems: totalItems.toString(),
          })}
        </p>
        <div className="mt-3 flex w-full justify-between gap-4 md:mt-0">
          <button
            data-testid="previous-arrow"
            disabled={disablePrevious}
            onClick={onPrevious}
            aria-label={translate('common.prev')}
          >
            <ChevronLeftIcon data-disabled={disablePrevious} stroke="#212121" {...previousIconProps} />
          </button>
          <p className="text-14 text-gray-700 md:hidden">
            {translate('common.from-to', {
              from,
              to,
              totalItems: totalItems.toString(),
            })}
          </p>
          <button
            data-testid="next-arrow"
            onClick={onNext}
            disabled={disableNext}
            aria-label={translate('common.next')}
          >
            <ChevronRightIcon data-disabled={disableNext} stroke="#212121" {...nextIconProps} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TablePagination;
