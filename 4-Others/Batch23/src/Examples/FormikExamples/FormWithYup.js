import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function FormWithYup() {
  return (
    <div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          firstName: 'Peter',
          lastName: 'Jackson',
          email: 'peter@jackson.com',
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='Please enter your first name' />
          <div style={{ color: 'red' }}>
            <ErrorMessage name='firstName' />
          </div>

          <label htmlFor='lastName'>Last Name</label>
          {/* <Field id='lastName' name='lastName' placeholder='Please enter your last name' /> */}

          <div style={{ color: 'red' }}>
            <ErrorMessage name='lastName' />
          </div>

          <label htmlFor='email'>Email</label>
          <Field id='email' name='email' placeholder='Please enter your email' type='email' />
          <div style={{ color: 'red' }}>
            <ErrorMessage name='email' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormWithYup;
