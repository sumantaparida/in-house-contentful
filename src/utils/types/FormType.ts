export type FieldOption = {
  value: string;
  label: string;
};

export type _T_formField = {
  id: string;
  name: string;
  type: 'text' | 'Link' | 'Boolean' | 'radio' | 'file';
  defaultValue?: any;
  localized: boolean;
  required: boolean;
  validations: any[];
  disabled: boolean;
  options?: FieldOption[];
  linkType?: string;
};

export type _T_inValues = {
  [key: string]: any;
};
