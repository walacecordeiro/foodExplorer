import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 10.4rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  padding: 2.8rem 0;
  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > svg {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }

  button {
    gap: 1.1rem;

    width: 21.6rem;
    font-size: 1.4rem;

    svg {
      width: 2.6rem;
      height: 2.2rem;
    }
  }
`;