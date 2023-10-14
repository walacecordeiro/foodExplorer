import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }
  
  > h2 {
    position: relative;
    font-family: "Roboto", sans-serif;

    > span {
      font-size: 1.2rem;
      font-weight: 100;
      position: absolute;
      right: 0;
      bottom: -1rem;
      color: ${({ theme }) => theme.COLORS.Cake_200};
    }
  }
`;