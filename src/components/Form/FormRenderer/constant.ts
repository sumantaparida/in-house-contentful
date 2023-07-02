import type { FormField } from './type';

export const formFields: FormField[] = [
  {
    id: 'pdfFile',
    name: 'PDF file sumanta',
    type: 'Link',
    localized: true,
    required: true,
    validations: [],
    disabled: false,
    linkType: 'Asset',
  },
  {
    id: 'title',
    name: 'Title',
    type: 'text',
    localized: true,
    required: true,
    validations: [],
    disabled: false,
  },
  {
    id: 'gender',
    name: 'Gender',
    type: 'radio',
    localized: true,
    required: false,
    validations: [],
    disabled: false,
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'file',
    name: 'File',
    type: 'file',
    localized: false,
    required: false,
    validations: [],
    disabled: false,
  },
];
