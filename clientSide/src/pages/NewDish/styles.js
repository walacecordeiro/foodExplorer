import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 1.6rem 3.2rem;
  }
`;

export const Content = styled.div`  
  > h2 {
    margin-top: 3.5rem;
    font-weight: 500;
  }
`;
