import styled from 'styled-components';

export const FaqStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    &.section0 {
      max-width: 100vw;
      padding: 178px 160px 0 160px !important;
      overflow: hidden;
    }
    &.noPadding {
      max-width: 100vw;
      background: #0F72EE;
      padding-bottom: 0px;
      margin-top: 100px;
      .halfBackground {
        z-index: 1;
      }
      .halfBackground:before {
        background: #1166D6;
        z-index: 0;
      }
      .quoteContainer {
        margin: 0;
      }
    }
    &.noMargin {
      margin-top: 190px;
      padding: 0;
      max-width: none;
      .quoteContainer {
        margin: 0;
      }
    }
    .knowMore {
      margin-top: 80px;
      button {
        width: 172px;
      }
    }
  }
  .topContainer {
    display: flex;
    .text {
      flex-basis: 70%;
    }
    .secondHeading {
      margin-top: 28px;
    }
    .bowlImage {
      position: relative;
      .animation {
        position: absolute;
        top: 12px;
        left: 56px;
        z-index: -1;
        width: 200px;
        height: 92%;
      }
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
  }
  .quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 140px 0 100px 0;
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
      margin-top: 16px;
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
      &.section0 {
        padding: 120px 30px 0 30px !important;
      }
      &.noMargin {
        margin-top: 120px;
        height: auto;
        padding: 0;
      }
      &.section7{
        padding: 0;
      }
      &.noPadding {
        padding: 0;
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
      .text {
        flex-basis: 100%;
        text-align: center;
      }
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



