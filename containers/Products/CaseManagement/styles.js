import styled from 'styled-components';

export const CaseManagmentStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    &.section0 {
      margin-top: 178px;
    }
    &.noPadding {
      margin-top: 150px;
      padding: 0;
      background: #0F72EE;
      .halfBackground {
        z-index: 1;
      }
      .halfBackground:before {
        background: #1166D6;
        z-index: 0;
      }
    }
    .knowMore {
      margin-top: 100px;
      button {
        width: 172px;
      }
    }
  }
  .topContainer {
    display: flex;
    .secondHeading {
      margin-top: 16px;
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
      margin-top: 9px;
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
    margin: 150px 0 120px 0;
    text-align: center;
    .halfBackground {
      margin-top: 0px;
    }
  }
  .demoContainer {
    padding: 80px 0;
    .quoteContainer {
      margin: 0;
    }
    flex: 1;
    .demoInput {
      display: flex;
      align-items: center;
      justify-content: center;
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
  @media only screen and (min-width: 1400px) {
    .section {
      padding: 0 40px;
      &.section0 {
        padding: 0px 0px 0 0px;
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    .section {
      padding: 0 80px;
    }
  }
  @media only screen and (max-width: 760px) {
    .quoteContainer {
      margin: 100px 0 72px 0;
    }
    .section {
      padding: 0 30px;
      &.noMargin {
        margin-top: 120px;
        height: auto;
      }
      &.noPadding {
        .form-group {
          display: none;
        }
        button {
          margin-top: 30px;
        }
      }
    }
    .topContainer {
      display: flex;
      .secondHeading {
        margin-top: 28px;
        margin-bottom: 10px;
      }
      .bowlImage {
        display: none;
      }
      .demoInput {
        width: 100%;
        flex-wrap: wrap;
        .form-group {
          width: 100%;
        }
        .buttons {
          width: 100%;
        }
      }
    }
  }
`;



