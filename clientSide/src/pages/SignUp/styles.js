import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  :first-child span {
    display: none;
  }
  :first-child h2 {
    font-size: 3.7rem;
  }

  > :last-child{
    font-size: 1.4rem;
  }
  `;

export const Form = styled.form`
  width: clamp(31.6rem, 80%, 34.8rem);
  display: flex;
  flex-direction: column;
  margin-top: 4.1rem;
  gap: 3.2rem;

  label {
    color: ${({ theme }) => theme.COLORS.Light_400};
    margin-bottom: -2.4rem;
  }
`;