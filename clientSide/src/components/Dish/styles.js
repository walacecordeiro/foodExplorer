import styled from "styled-components";

export const Container = styled.div`
  min-width: 21rem;

  padding-bottom: 2.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.Dark_200};
  border: solid 1px ${({ theme }) => theme.COLORS.Dark_300};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  > svg:first-child {
    align-self: end;
    margin: 1.6rem 1.6rem 1.8rem;
  }

  > img:nth-child(2) {
    width: 8.8rem;
  }

  > h3 {
    font-size: 1.4rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.Cake_200};
  }
`;