import styled from 'styled-components';

export const HomePageStyles = styled.div`
  margin: auto;
  .halfBackground {
    position: relative;
    &:before {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background: #00CEFF;
      height: 21px;
      opacity: 0.2;
      z-index: -1;
    }
  }
  .quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 150px 0 100px 0;
    &.demoContainer {
      .demoInput {
        padding-top: 40px;
        display: flex;
        align-items: center;
        .form-group {
          width: 360px;
          margin-right: 16px;
          margin-top: 20px;
        }
        button {
          min-width: 172px;
        }
      }
    }
  }
`;

