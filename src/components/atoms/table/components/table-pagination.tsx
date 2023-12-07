import { SVGAttributes, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { classnames } from '@/utils/classnames/classnames';
import useMediaQuery from '@/hooks/useMediaQuery';
import { tablet } from '@/constants/screensizes';
import Typography from '../../typography';
import Select from '../../select';
import { TablePaginationProps } from '../types';

const TablePagination = ({
  className,
  page,
  limit,
  totalItems,
  disableNext,
  disablePrevious,
  onRowsPerPageChange,
  onPrevious,
  onNext,
}: TablePaginationProps) => {
  const { translate } = useTranslation();

  const [isTabletSize] = useMediaQuery(tablet);

  const { from, to } = useMemo(() => {
    const from = ((page - 1) * limit + 1).toString();
    const to = Math.min(page * limit + limit, totalItems).toString();

    return { from, to };
  }, [limit, page, totalItems]);

  const previousIconProps: SVGAttributes<SVGElement> = {
    className: classnames('h-6 w-6', { 'cursor-pointer': !disablePrevious }),
    stroke: disablePrevious ? '#D1D1D1' : '#212121',
  };

  const nextIconProps: SVGAttributes<SVGElement> = {
    className: classnames('h-6 w-6', { 'cursor-pointer': !disableNext }),
    stroke: disableNext ? '#D1D1D1' : '#212121',
  };

  const paginationClassName = classnames('flex w-full gap-4 py-6 md:justify-between md:gap-0', className);

  return (
    <div className={paginationClassName}>
      <div className="flex items-center gap-2">
        <Typography fontSize={14} className="text-gray-700">
          {isTabletSize ? translate('common.rows.per.page') : translate('common.rows')}
        </Typography>
        <Select
          onChange={onRowsPerPageChange}
          value={limit.toString()}
          options={[
            { name: '25', value: '25' },
            { name: '50', value: '50' },
            { name: '100', value: '100' },
            { name: 'All', value: '' },
          ]}
        />
      </div>
      <div className="flex items-center gap-3 md:gap-9">
        <Typography fontSize={14} className="text-gray-700">
          {translate('common.from.to', {
            values: {
              from,
              to,
              totalItems: totalItems.toString(),
            },
          })}
        </Typography>
        <div className="flex gap-4">
          <ChevronLeftIcon stroke="#212121" {...previousIconProps} onClick={onPrevious} />
          <ChevronRightIcon stroke="#212121" {...nextIconProps} onClick={onNext} />
        </div>
      </div>
    </div>
  );
};
export default TablePagination;
