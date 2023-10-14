import styled from "styled-components";

export const Container = styled.div`
  width: clamp(26rem, 50%, 58.1rem);
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  border-radius: 0.5rem;

  > input {
    width: clamp(10rem, 50%, 28rem);
    height: 4.8rem;
    padding: 1.4rem;

    color: ${({ theme }) => theme.COLORS.Light_100};
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light_500};
    }
  }
  > svg {
    width: 2rem;
    height: 2rem;
  }
`;