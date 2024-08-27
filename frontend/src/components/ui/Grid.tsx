import { css } from 'styled-components';

const Grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (min-width: 1200px) {
    gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export default Grid;
