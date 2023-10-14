import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 2.3rem 0;
  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > div {
    filter: grayscale();
  }
`;
