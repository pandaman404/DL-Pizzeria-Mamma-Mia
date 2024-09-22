import SubmitButton from '@/components/SubmitButton';
import Container from '@/components/ui/Container';
import Flex from '@/components/ui/Flex';
import FormField from '@/components/ui/FormField';
import Title from '@/components/ui/Title';
import { regexEmail } from '@/constants/regex';
import { useUserContext } from '@/context/UserContext';
import type { LoginFormValues } from '@/types/forms/LoginFormValues';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import styled from 'styled-components';
import * as yup from 'Yup';

const LoginFormSchema = yup.object().shape({
  email: yup.string().matches(regexEmail, 'Ingresa un email valido').required('Campo requerido'),
  password: yup.string().min(6, 'La contraseña debe tener minimo 6 caracteres').required('Campo requerido'),
});

const LoginForm = () => {
  const { login } = useUserContext();
  const initialValues: LoginFormValues = { email: '', password: '' };

  const handleSubmit = async (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
    const { email, password } = values;
    try {
      await login(email, password);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <Title as='h2'>Login</Title>
      <Formik initialValues={initialValues} validationSchema={LoginFormSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
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
            <SubmitButton disabled={isSubmitting} type='submit'>
              {isSubmitting ? 'Ingresando...' : 'Ingresar'}
            </SubmitButton>
          </Form>
        )}
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

      &:disabled {
        background-color: gray;
      }
    }
  }
`;

export default LoginForm;
