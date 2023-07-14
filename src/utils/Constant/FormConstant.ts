import type { _T_formField } from '@/utils/types/FormType';

export const formFields: _T_formField[] = [
  {
    id: 'title',
    name: 'Title',
    type: 'singleLine',
    defaultValue: 'Dynamic Title',
    required: true,
    validations: [
      {
        regexp: {
          pattern: /^[A-Za-z ]*$/,
          erMsg: 'Only alphabetic characters are allowed',
        },
      },
    ],
    disabled: false,
  },
  {
    id: 'multiLine',
    name: 'Multi Line',
    type: 'multiLine',
    required: true,
    validations: [],
    disabled: false,
  },
  {
    id: 'url',
    name: 'URL',
    type: 'link',
    required: true,
    validations: [
      {
        regexp: {
          pattern: /^[A-Za-z ]*$/,
          erMsg: 'Invalid URL',
        },
      },
    ],
    disabled: false,
    linkType: 'Asset',
  },
  {
    id: 'display',
    name: 'Display',
    type: 'boolean',
    required: true,
    validations: [],
    disabled: false,
    options: [
      { id: 'displaytrue', label: 'True', value: 'true' },
      { id: 'displayfalse', label: 'False', value: 'false' },
    ],
  },
  {
    id: 'gender',
    name: 'Gender',
    type: 'singleCheck',
    // defaultValue: 'male',
    required: true,
    validations: [],
    disabled: false,
    options: [
      { id: 'male', value: 'male', label: 'Male' },
      { id: 'female', value: 'female', label: 'Female' },
    ],
  },
  {
    id: 'multiCheckbox',
    name: 'Multi Checkbox',
    type: 'multiCheck',
    // defaultValue: 'male',
    required: true,
    validations: [],
    disabled: false,
    options: [
      { id: 'one', value: 'one', label: 'One' },
      { id: 'two', value: 'two', label: 'Two' },
      { id: 'three', value: 'three', label: 'Three' },
      { id: 'four', value: 'four', label: 'Four' },
      { id: 'five', value: 'five', label: 'Five' },
    ],
  },
  {
    id: 'selection',
    name: 'Selection',
    type: 'select',
    // defaultValue: 'male',
    required: true,
    validations: [],
    disabled: false,
    options: [
      { id: 'select_one', value: 'one', label: 'One' },
      { id: 'select_two', value: 'two', label: 'Two' },
      { id: 'select_three', value: 'three', label: 'Three' },
      { id: 'select_four', value: 'four', label: 'Four' },
      { id: 'select_five', value: 'five', label: 'Five' },
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
