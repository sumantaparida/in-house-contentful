import type { _T_formField } from '@/utils/types/FormType';

export const formFields: _T_formField[] = [
  {
    id: 'title',
    name: 'Title',
    type: 'text',
    defaultValue: 'Dynamic Title',
    required: true,
    validations: [
      {
        regexp: {
          pattern: '/^[A-Za-z]+$/',
          msg: 'Only alphabetic characters are allowed',
        },
      },
    ],
    disabled: false,
  },
  {
    id: 'pdfFile',
    name: 'PDF file sumanta',
    type: 'Link',
    required: true,
    validations: [],
    disabled: false,
    linkType: 'Asset',
  },
  {
    id: 'gender',
    name: 'Gender',
    type: 'radio',
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
