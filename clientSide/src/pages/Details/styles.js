import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 3rem 5.6rem;
  text-align: center;

  > :nth-child(2) {
    width: 26.3rem;
    height: 26.3rem;
    margin: 1.6rem 0;
  }

  > :nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    margin-bottom: 4.8rem;

    > p {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
    }
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
