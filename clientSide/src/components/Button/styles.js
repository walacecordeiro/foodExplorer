import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.Tomato_100};
  color: ${({ theme }) => theme.COLORS.Light_100};

  height: 4.8rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 100;

  &:disabled {
    opacity: 0.5;
  }
`;