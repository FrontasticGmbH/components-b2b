import { ContentTileProps } from '@/components/molecules/content-tile/types';
import { Link } from '@/types/link';

export type Item = ContentTileProps;

export interface ContentSliderProps {
  title?: string;
  link?: Link;
  items: Item[];
}
