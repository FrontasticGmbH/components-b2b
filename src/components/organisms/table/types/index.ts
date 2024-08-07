import { TableHTMLAttributes } from 'react';
import { SelectProps } from '@/components/atoms/select/types';

export type TableCellProps = TableHTMLAttributes<HTMLTableCellElement> & {
  sortable?: boolean;
  isButtonsHead?: boolean;
  isButtonsCell?: boolean;
  onSorting?: () => void;
};

export type TableRowProps = TableHTMLAttributes<HTMLTableRowElement>;

export type TablePaginationProps = {
  className?: string;
  page: number;
  limit: number;
  totalItems: number;
  onRowsPerPageChange?: SelectProps['onChange'];
  onPrevious?: () => void;
  onNext?: () => void;
};
