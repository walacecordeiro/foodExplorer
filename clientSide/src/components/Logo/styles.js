import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
  > h2 {
    position: relative;
    font-family: "Roboto", sans-serif;

    > span {
      font-size: 1.2rem;
      font-weight: 100;
      position: absolute;
      right: 0;
      bottom: -1rem;
      color: ${({ theme }) => theme.COLORS.Cake_200};
    }
  }
`;