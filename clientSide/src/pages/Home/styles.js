import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  width: 100vw;
  grid-area: content;
  overflow-y: scroll;
  overflow-x: hidden;

  padding: 1.6rem 3.2rem;
  display: flex;
  flex-direction: column;
`;
