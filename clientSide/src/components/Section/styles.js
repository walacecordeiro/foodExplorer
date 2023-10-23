import styled from "styled-components";

export const Container = styled.section`
  margin: 2.4rem 0;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}rem;

  align-items: ${(props) => props.xAlign};

  > *{
    text-align: ${(props) => props.xAlign};
  }

  > :nth-last-child(2) {
    margin-bottom: -${(props) => props.gap}rem;
  }
  
  > button:last-child {
    margin-top: 4.8rem;
  }
`;
