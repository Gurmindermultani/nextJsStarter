import styled from 'styled-components';

export const CaseManagmentStyles = styled.div`
  margin: auto;
  margin-top: 98px;
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
  .topContainer {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 376px;
    .secondHeading {
      margin-top: 24px;
    }
    .bowlImage {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .demoInput {
      margin-top: 32px;
      width: 40%;
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
    .halfBackground {
      position: relative;
      width: fit-content;
      &:before {
        content: "";
        width: 100%;
        position: absolute;
        bottom: 10px;
        left: 0px;
        height: 22px;
        z-index: -1;
      }
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
