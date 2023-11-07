import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 0 4rem;
  
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