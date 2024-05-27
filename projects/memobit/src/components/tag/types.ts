export interface Tag {
  class?: string; // @Todo: we should remove this or create an example - but seems useless in here
  icon?: string;
  iconColorType?: 'primary' | 'secondary'; // @Todo: we should remove this or create an example - but seems useless in here
  label?: string;
  labelClass?: string; // @Todo: we should remove this or create an example - but seems useless in here
  tooltip?: string;
  type?: 'normal' | 'stars'; // @Todo: this prop and value should be removed - inject another component instead doing this if that's the case - bad practice
  value?: number;
}
