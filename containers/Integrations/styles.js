import styled from 'styled-components';

export const IntegrationsStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    &.section0 {
      max-width: 100vw;
      padding: 105px 160px 0 160px !important;
      overflow: hidden;
    }
    &.noMargin {
      margin-top: 190px;
      padding: 0;
      max-width: none;
      .quoteContainer {
        margin: 0;
      }
    } }
    }
  }
  .topContainer {
    display: flex;
    align-items: center;
    .text {
      flex-basis: 70%;
    }
    .secondHeading {
      margin-top: 8px;
    }
    .bowlImage {
      img {
        width: 400px;
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
  .icon {
    width: 208px;
    height: 102px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 140px 0 100px 0;
    text-align: center;
    .highlight {
      margin-bottom: 16px;
    }
    .halfBackground {
      margin-top: 0px;
      max-width: 670px;
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



