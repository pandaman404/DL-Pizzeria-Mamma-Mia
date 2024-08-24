import styled from 'styled-components';

const PizzaImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 4px solid ${({ theme }) => theme.softBeige};
`;

export default PizzaImage;
