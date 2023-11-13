import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.Light_600};
  border-radius: 0.8rem;
  border: ${({ theme, $isNew }) =>
    $isNew
      ? `1px dashed ${theme.COLORS.Light_600}`
      : `1px solid ${theme.COLORS.Light_600}`};

  color: ${({ theme }) => theme.COLORS.Light_100};


  > input {
    width: 100%;

    background-color: ${({ theme, $isNew }) =>
      $isNew ? "transparent" : theme.COLORS.Light_600};
    color: ${({ theme }) => theme.COLORS.Light_100};

    padding: .8rem 0 .8rem .8rem;
    border: none;
    border-radius: 0.8rem;

    outline: none;
  }

  > button {
    border: none;
    background: none;
    margin: 0 1.6rem;
    background-color: ${({ theme, $isNew }) =>
      $isNew ? "transparent" : theme.COLORS.Light_600};
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.Light_500 : theme.COLORS.Light_100};

    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.COLORS.Cake_100};
    }
  }
`;
