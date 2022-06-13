import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function RegisterFormWithYup() {
  return (
    <div>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          password: '',
          confirmPassword: '',
          email: 'peter@jackson.com',
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form>
          <section>
            <label htmlFor='email'>Email</label>
            <Field id='email' name='email' placeholder='Please enter your email' type='email' />
            <div style={{ color: 'red' }}>
              <ErrorMessage name='email' />
            </div>
          </section>
          <section>
            <label htmlFor='password'>Password</label>
            <Field id='password' name='password' placeholder='Please enter your password' />
            <div style={{ color: 'red' }}>
              <ErrorMessage name='password' />
            </div>
          </section>
          <section>
            <label htmlFor='passwordConfirmation'>Confirm Password</label>
            <Field id='passwordConfirmation' name='passwordConfirmation' placeholder='Please re-enter your passord' />

            <div style={{ color: 'red' }}>
              <ErrorMessage name='passwordConfirmation' />
            </div>
          </section>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterFormWithYup;
