/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-param-reassign */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import type { _T_formField, _T_inValues } from '@/utils/types/FormType';

import FormIkWrapper from './style';

interface Props {
  fields: _T_formField[];
}
const FromRender: React.FC<Props> = props => {
  const { fields } = props;
  const validationSchema = Yup.object().shape(
    fields.reduce((schema: any, field) => {
      const { id, type, required } = field;
      let fieldSchema;

      if (type === 'text') {
        fieldSchema = Yup.string().matches(/^[A-Za-z]+$/, 'Only alphabetic characters are allowed');
      } else if (type === 'Link') {
        fieldSchema = Yup.string().url('Invalid URL');
      } else if (type === 'Boolean') {
        fieldSchema = Yup.boolean();
      } else if (type === 'file') {
        fieldSchema = Yup.mixed().required(`${field.name} is required`);
      } else {
        fieldSchema = Yup.string();
      }

      if (required) {
        fieldSchema = fieldSchema.required(`${field.name} is required`);
      }

      schema[id] = fieldSchema;

      return schema;
    }, {}),
  );

  const initialValues = fields.reduce((values, field) => {
    const OBJ: _T_inValues = values;
    OBJ[field.id] = field.defaultValue;
    // values[field.id] = field.defaultValue;
    return values;
  }, {});

  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };

  const onHandleClick = () => {
    const formName = document.getElementById('form_submit');
    if (formName) {
      formName.click();
    }
  };

  useEffect(() => {
    onHandleClick();
  }, []);

  return (
    <FormIkWrapper className="flex flex-col">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          {fields.map(field => (
            <div className="formik_container mb-4 flex flex-col pl-2" key={field.id}>
              <label htmlFor={field.id}>{field.name}:</label>
              {field.type === 'Link' ? (
                <Field type="text" id={field.id} name={field.id} />
              ) : field.type === 'Boolean' ? (
                <Field type="checkbox" id={field.id} name={field.id} />
              ) : field.type === 'radio' ? (
                field.options?.map(option => (
                  <React.Fragment key={option.value}>
                    <Field type="radio" id={option.value} name={field.id} value={option.value} />
                    <label htmlFor={option.value}>{option.label}</label>
                  </React.Fragment>
                ))
              ) : field.type === 'file' ? (
                <Field type="file" id={field.id} name={field.id} />
              ) : (
                <Field type="text" id={field.id} name={field.id} />
              )}
              <ErrorMessage name={field.id} component="div" className="error" />
            </div>
          ))}
          <button type="submit" id="form_submit" style={{ display: 'none' }}>
            Submit
          </button>
        </Form>
      </Formik>
      <button type="button" onClick={onHandleClick}>
        Form Submit
      </button>
    </FormIkWrapper>
  );
};
export default FromRender;
