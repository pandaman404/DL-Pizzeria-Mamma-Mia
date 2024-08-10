import { css } from 'styled-components';

const Grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (min-width: 1200px) {
    gap: 40px;
  }
`;

export default Grid;
