import styled from "styled-components";

export const Container = styled.textarea`
  padding: 1.4rem;
  height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.Dark_900};
  border: none;
  resize: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.Light_100};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.Cake_100};
  }
`;
