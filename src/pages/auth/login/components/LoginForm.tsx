import SubmitButton from '@/components/SubmitButton';
import Container from '@/components/ui/Container';
import Flex from '@/components/ui/Flex';
import FormField from '@/components/ui/FormField';
import Title from '@/components/ui/Title';
import { LoginFormValues } from '@/types/forms/LoginFormValues';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import * as yup from 'Yup';

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Ingresa un email valido').required('Campo requerido'),
  password: yup.string().min(6, 'La contraseña debe tener minimo 6 caracteres').required('Campo requerido'),
});

const LoginForm = () => {
  const initialValues: LoginFormValues = { email: '', password: '' };

  return (
    <Wrapper>
      <Title as='h2'>Login</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginFormSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert('Login completado exitosamente!');
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <FormField>
            <label htmlFor='email'>Correo: </label>
            <Field id='email' name='email' placeholder='micorreo@desafiolatam.cl' />
            <ErrorMessage name='email' component='div' className='error' />
          </FormField>
          <FormField>
            <label htmlFor='password'>Contraseña:</label>
            <Field id='password' name='password' type='password' placeholder='******' />
            <ErrorMessage name='password' component='div' className='error' />
          </FormField>
          <SubmitButton type='submit'>Ingresar</SubmitButton>
        </Form>
      </Formik>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  ${Flex}
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 32px;
    color: ${({ theme }) => theme.deepBlue};
  }

  form {
    ${Flex}
    flex-direction: column;
    gap: 10px;
    width: 90%;
    max-width: 500px;
    padding: 40px 0;
    border: 1px solid ${({ theme }) => theme.lightGray};
    border-radius: 10px;

    button {
      margin-top: 10px;
      width: 90%;
    }
  }
`;

export default LoginForm;
