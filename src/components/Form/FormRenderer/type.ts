export type FieldOption = {
  value: string;
  label: string;
};

export type FormField = {
  id: string;
  name: string;
  type: 'text' | 'Link' | 'Boolean' | 'radio' | 'file';
  localized: boolean;
  required: boolean;
  validations: any[];
  disabled: boolean;
  options?: FieldOption[];
  linkType?: string;
};
