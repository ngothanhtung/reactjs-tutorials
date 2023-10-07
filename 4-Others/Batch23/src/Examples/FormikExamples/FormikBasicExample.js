import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

//* Formik without yup
function FormikBasicExample() {
  // Validate function for formik
  const validate = (values, props) => {
    const errors = {};

    // Check firstName
    if (['admin', 'null', 'god'].includes(values.userName)) {
      errors.userName = 'Nice try';
    }

    // Check email is valid
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  return (
    <div>
      {/* Formik root */}
      <Formik
        validate={validate}
        initialValues={{
          userName: 'admin',
          firstName: 'Peter',
          lastName: 'Jackson',
          email: 'peter@jackson.com',
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {/* Form  */}
        <Form>
          {/* Input element: UserName */}
          <label htmlFor='userName'>User name</label>
          <Field id='userName' name='userName' placeholder='Please enter your user name' />
          <div style={{ color: 'red' }}>
            <ErrorMessage name='userName' />
          </div>
          {/* Input element: FirstName */}
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='Please enter your first name' />

          {/* Input element: LastName */}
          <label htmlFor='lastName'>Last Name</label>
          <Field id='lastName' name='lastName' placeholder='Please enter your last name' />

          {/* Input element: Email */}
          <label htmlFor='email'>Email</label>
          <Field id='email' name='email' placeholder='Please enter your email' type='email' />

          {/* Input element: Phone */}
          <label htmlFor='phone'>Phone Number</label>
          <Field id='phone' name='phone' placeholder='Please enter your phone' type='phone' />
          <div style={{ color: 'red' }}>
            <ErrorMessage name='phone' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikBasicExample;
