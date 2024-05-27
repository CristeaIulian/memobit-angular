export interface ListItems {
  label: string;
  items: {
    isSelected?: boolean;
    label: string;
    path: string;
  }[];
}
