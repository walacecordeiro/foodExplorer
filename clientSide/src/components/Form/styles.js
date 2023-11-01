import styled from "styled-components";

export const Container = styled.form`
  width: clamp(31.6rem, 100%, 36.4rem);
  display: flex;
  flex-direction: column;
  margin-top: 4.1rem;
  gap: 2.4rem;
  
  > label {
    color: ${({ theme }) => theme.COLORS.Light_400};
    margin-bottom: -1.6rem;
  }
`;
