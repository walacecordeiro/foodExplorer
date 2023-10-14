import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > div {
    filter: grayscale();

    h2 {
      font-size: 1.2rem;
      
      > span {
        display: none;
      }
    }
    
  }
`;
