import Container from '@/components/ui/Container';
import Flex from '@/components/ui/Flex';
import Title from '@/components/ui/Title';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';

interface MyFormValues {
  firstName: string;
}

const RegisterForm = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <Wrapper>
      <Title>Register</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='First Name' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  /* ${Flex} */
`;
/* flex-direction: column;
flex: 1;
justify-content: flex-start;
border: 1px solid black;
width: 100%; */

export default RegisterForm;
