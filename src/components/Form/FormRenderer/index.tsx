/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-param-reassign */
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

// import Multiline from '@/components/Form/Multiline';
import { ErrorMsg } from '@/utils/Services/CommonServices';
import type { _T_formField, _T_inValues } from '@/utils/types/FormType';

import FormIkWrapper from './style';

interface Props {
  fields: _T_formField[];
}
const FromRender: React.FC<Props> = props => {
  const { fields } = props;
  const validationSchema = Yup.object().shape(
    fields.reduce((schema: any, field) => {
      const { id, type, required, validations } = field;
      let fieldSchema;
      const { PATTERN, ERMSG } = ErrorMsg(validations) || {};
      if (type === 'singleLine') {
        fieldSchema = Yup.string().matches(PATTERN, ERMSG);
      } else if (type === 'link') {
        fieldSchema = Yup.string().matches(PATTERN, ERMSG);
      } else if (type === 'singleCheck') {
        fieldSchema = Yup.boolean();
      } else if (type === 'file') {
        fieldSchema = Yup.mixed().required('Required');
      } else if (type === 'boolean') {
        fieldSchema = Yup.boolean();
      } else {
        fieldSchema = Yup.string();
      }

      if (required) {
        fieldSchema = fieldSchema.required('Required');
      }

      schema[id] = fieldSchema;

      return schema;
    }, {}),
  );

  const initialValues = fields.reduce((values, field) => {
    const OBJ: _T_inValues = values;
    OBJ[field.id] = field.defaultValue;
    return values;
  }, {});

  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log('Form Submission', values);
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
    <FormIkWrapper className="flex flex-col px-8">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {(formData: any) => {
          return (
            <Form>
              {fields.map(field => {
                const hasError = formData.errors[field.id];
                // console.log('Field', hasError);
                return (
                  <div className={`formik_container mb-4 flex flex-col pl-2 ${hasError ? 'has_error' : ''}`} key={field.id}>
                    <label htmlFor={field.id}>
                      {field.name} {field.required ? '(Required)' : null}
                    </label>
                    {field.type === 'singleLine' ? (
                      <Field type="text" id={field.id} name={field.id} />
                    ) : field.type === 'multiLine' ? (
                      <Field
                        as="textarea" // Use "textarea" instead of "input" to render a textarea component
                        id={field.id}
                        name={field.id}
                        rows={4} // Set the number of rows for the textarea
                      />
                    ) : field.type === 'boolean' ? (
                      field.options?.map(option => (
                        <React.Fragment key={option.id}>
                          <Field type="radio" id={option.value} name={field.id} value={option.value} />
                          <label htmlFor={option.id}>{option.label}</label>
                        </React.Fragment>
                      ))
                    ) : field.type === 'singleCheck' ? (
                      field.options?.map(option => (
                        <React.Fragment key={option.id}>
                          <Field type="radio" id={option.value} name={field.id} value={option.value} />
                          <label htmlFor={option.id}>{option.label}</label>
                        </React.Fragment>
                      ))
                    ) : field.type === 'multiCheck' ? (
                      <Field type="checkbox" id={field.id} name={field.id} />
                    ) : field.type === 'link' ? (
                      <Field type="text" id={field.id} name={field.id} />
                    ) : field.type === 'file' ? (
                      <Field type="file" id={field.id} name={field.id} />
                    ) : field.type === 'multiFile' ? (
                      <Field type="file" id={field.id} name={field.id} />
                    ) : null}
                    {/* <ErrorMessage name={field.id} component="div" className="error" /> */}
                    <ErrorMessage
                      name={field.id}
                      render={msg => (
                        <div className="_error">
                          <ErrorRoundedIcon
                            sx={{
                              fontSize: '16px',
                            }}
                            color="error"
                          />{' '}
                          {msg}
                        </div>
                      )}
                    />
                  </div>
                );
              })}
              <button type="submit" id="form_submit" style={{ display: 'none' }}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      {/* <button type="button" onClick={onHandleClick}>
        Form Submit
      </button> */}
    </FormIkWrapper>
  );
};
export default FromRender;
