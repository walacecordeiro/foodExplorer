import styled from "styled-components";

export const Container = styled.div`
  padding: 1.4rem;
  position: relative;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  border-radius: 0.5rem;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.Cake_100};
  }

  > select {
    width: 100%;
    outline: none;
    appearance: none;

    color: ${({ theme }) => theme.COLORS.Light_500};
    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    border: none;
  }

  > svg {
    font-size: 1.6rem;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    pointer-events: none;
  }
`;
