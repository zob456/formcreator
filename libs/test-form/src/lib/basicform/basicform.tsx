import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { Submitbutton } from '../../index';
import { log } from 'libs/test-form/src/index';

const StyledBasicform = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  .form {
    color: pink;
  }
`;
interface MyFormValues {
  firstName: string;
  email: string;
}

export const Basicform = () => {
  const initialValues: MyFormValues = { firstName: '', email: '' };
  return (
    <StyledBasicform>
      <h4 style={{ display: 'flex' }}>
        <img
          src="https://www.bravadohealth.com/favicon.ico?v=2"
          alt="logo"
          style={{ height: '25px', width: '25px', marginRight: '5px' }}
        />
        Basic Formik example{' '}
        <img
          src="https://www.bravadohealth.com/favicon.ico?v=2"
          alt="logo"
          style={{ height: '25px', width: '25px', marginLeft: '5px' }}
        />
      </h4>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          log(values);
          actions.setSubmitting(false);
        }}
        validateOnChange={true}
      >
        <Form className="form">
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" type="email" />
          <Submitbutton title={'Submit'} />
        </Form>
      </Formik>
    </StyledBasicform>
  );
};

export default Basicform;
