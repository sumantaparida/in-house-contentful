import type { _T_formField } from '@/utils/types/FormType';

export const formFields: _T_formField[] = [
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
    defaultValue: '',
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
