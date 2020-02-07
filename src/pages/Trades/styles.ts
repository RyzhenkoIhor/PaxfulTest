import styled from "styled-components";

export const TradesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  & > div {
    flex: 1;
    flex-grow: 1;
    &:nth-child(2) {
      flex-grow: 2;
    }
  }
  @media (max-width: 1280px) {
    & > div {
      &:nth-child(1) {
        flex-grow: 1;
      }
      &:nth-child(2) {
        flex-grow: 25;
      }
      &:nth-child(3) {
        flex-grow: 10;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      flex: 1;
      flex-grow: 1;
    }
  }
`;
