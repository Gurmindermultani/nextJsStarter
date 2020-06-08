import styled from 'styled-components';

export const CaseManagmentStyles = styled.div`
  .section {
    height: calc(100vh);
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &.section0 {
      padding-top: 80px;
    }
    &.shortSection {
      height: 350px;
      padding-bottom: 100px;
    }
    &.noPadding {
      max-width: 100vw;
      background: #0F72EE;
      padding-bottom: 0px;
      .halfBackground {
        z-index: 1;
      }
      .halfBackground:before {
        background: #1166D6;
        z-index: 0;
      }
    }
    .knowMore {
      button {
        width: 172px;
      }
    }
  }
  .topContainer {
    display: flex;
    .topText {
      margin-bottom: 16px;
    }
    .secondHeading {
      margin-top: 28px;
      margin-bottom: 10px;
    }
    .bowlImage {
      position: relative;
      .animation {
        position: absolute;
        top: 12px;
        left: 56px;
        z-index: -1;
        width: 200px;
      }
    }
    .demoInput {
      margin-top: 48px;
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
  }
  .quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .halfBackground {
      margin-top: 10px;
    }
    &.demoContainer {
      flex: 1;
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



