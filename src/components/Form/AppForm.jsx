import React from 'react';
import { Formik } from 'formik';
/**
 *
 * @param {import('formik').FormikConfig} props
 */
const AppForm = (props) => {
  const {
    initialValues,
    onSubmit,
    validationSchema,
    children,
    action,
    ...rest
  } = props;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <form action={action} onSubmit={onSubmit} style={{ width: '100%' }}>
          {children}
        </form>
      )}
    </Formik>
  );
};

export default AppForm;
