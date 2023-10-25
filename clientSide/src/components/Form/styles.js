import styled from "styled-components";

export const Container = styled.form`
  width: clamp(31.6rem, 80%, 36.4rem);
  display: flex;
  flex-direction: column;
  margin-top: 4.1rem;
  gap: 3.2rem;

  label {
    color: ${({ theme }) => theme.COLORS.Light_400};
    margin-bottom: -2.4rem;
  }
`;