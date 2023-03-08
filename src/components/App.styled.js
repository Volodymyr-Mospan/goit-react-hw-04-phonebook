import styled from 'styled-components';
import bg from '../img/bg.jpg';

export const StyledApp = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(173, 173, 173, 0.3),
      rgba(173, 173, 173, 0.3)
    ),
    url(${bg});
  background-size: cover;

  display: flex;
  min-height: 100vh;
  text-shadow: 0 0 4px white;
`;
