export const formData = [
  {
    label: 'Name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
    field: 'name',
    validation: { required: 'This field is required' },
  },
  {
    label: 'Email Adress',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    field: 'email',
    validation: { required: 'This field is required' },
  },
  {
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890',
    field: 'phone',
    validation: { required: 'This field is required' },
  },
];
