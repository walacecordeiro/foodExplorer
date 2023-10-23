import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer"
  ;

  > main a {
    width: fit-content;
    align-self: normal;
  }

  > main {
    margin: 1.6rem 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > main img {
    max-width: 100%;
    height: auto;
    margin-top: 1.6rem;
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

    background-color: ${({theme}) => theme.COLORS.Dark_1000};
    padding: .4rem .8rem;
    border-radius: .5rem;
  }
`;
