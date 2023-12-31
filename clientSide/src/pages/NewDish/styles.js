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

  input[type="file"] {
    position: relative;
  }

  input[type="file"]::-webkit-file-upload-button {
    position: absolute;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    background-color: red;
  }

  .buttonForm {
    background-color: ${({ theme }) => theme.COLORS.Tomato_400};
    font-weight: 500;
  }
`;
