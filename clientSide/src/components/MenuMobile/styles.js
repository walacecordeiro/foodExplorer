import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;

  background-color: ${({ theme }) => theme.COLORS.Dark_400};

  display: flex;
  flex-direction: column;

  opacity: 0;
  pointer-events: none;

  transition: 0.5s;
  transform: translateX(-5rem);

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    `}

  > div:nth-child(1) {
    height: 11.4rem;
    padding: 2.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.Dark_600};

    > svg {
      transform: rotate(180deg);
      transition: 0.7s;
    }

    ${({ $isVisible }) =>
      $isVisible &&
      css`
        > svg {
          transform: rotate(0deg);
        }
      `}
  }

  > div:nth-child(2) {
    padding: 3.6rem 2.8rem 1rem;

    div:nth-child(1) {
      margin-bottom: 3.6rem;
    }

    nav {
      display: flex;
      flex-direction: column;

      a {
        font-family: "Poppins", sans-serif;
        font-weight: lighter;
        border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.Dark_1000};
        padding: 1rem;
      }
    }
  }
`;
