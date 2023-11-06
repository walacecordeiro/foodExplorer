import styled from "styled-components";

export const Container = styled.form`
  width: clamp(31.6rem, 100%, 36.4rem);
  display: flex;
  flex-direction: column;
  margin-top: 4.1rem;
  gap: 2.4rem;

  > label {
    color: ${({ theme }) => theme.COLORS.Light_400};
    margin-bottom: -1.6rem;
  }

  > section {
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    flex-wrap: wrap;

    & > * {
      flex-basis: calc(
        50% - .8rem
      );
    }

    padding: .8rem ;
    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    border-radius: 0.8rem;

    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.Cake_100};
    }
  }
`;
