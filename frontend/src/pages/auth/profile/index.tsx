import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Flex from '@/components/ui/Flex';
import RootLayout from '@/components/ui/RootLayout';
import Title from '@/components/ui/Title';
import { useUserContext } from '@/context/UserContext';
import styled from 'styled-components';

const ProfilePage = () => {
  const { logout } = useUserContext();

  return (
    <RootLayout>
      <ProfileContainer>
        <Title as='h2'>Perfil</Title>
        <div className='email-container'>
          <strong>Email:</strong>
          <span>ejemplo@gmail.com</span>
        </div>
        <LogoutButton onClick={logout}>Cerrar Sesión</LogoutButton>
      </ProfileContainer>
    </RootLayout>
  );
};

const ProfileContainer = styled(Container)`
  ${Flex}
  flex-direction: column;
  align-items: flex-start;
  max-height: 300px;
  max-width: 500px;
  gap: 2rem;
  border: 1px solid ${({ theme }) => theme.lightGray};
  padding: 2rem;
  border-radius: 10px;

  h2 {
    font-size: 32px;
    color: ${({ theme }) => theme.deepBlue};
    margin-bottom: 2rem;
    align-self: center;
  }

  .email-container {
    ${Flex}
    gap: 1rem;

    strong {
      color: ${({ theme }) => theme.deepBlue};
    }

    span {
      color: ${({ theme }) => theme.gray};
    }
  }
`;

const LogoutButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.lightGray};
  color: ${({ theme }) => theme.gray};
  width: 100%;
`;

export default ProfilePage;
