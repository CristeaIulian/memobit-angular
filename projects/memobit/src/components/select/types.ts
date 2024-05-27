import { Tag } from '../tag/types';

export interface DataSet {
  id: number | string;
  label: string;
  isSelected?: boolean;
  tag?: Tag;
}

export type SelectedOption = number | string | number[] | string[];
