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

  > main {
    grid-area: content;
    overflow-y: scroll;

    padding: 1.6rem 3.2rem;
  }
`;

export const Ingredients = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  > li {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.Dark_1000};
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > :first-child {
    width: fit-content;
    align-self: normal;
  }

  > :nth-child(2) {
    max-width: 100%;
    height: auto;
    margin-top: 1.6rem;
  }

  > :nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.4rem;
    font-family: "Poppins", sans-serif;

    margin-bottom: 4.8rem;
  }
`;
