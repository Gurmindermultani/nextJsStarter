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
      padding: 105px 0px 90px 0px !important;
      overflow: hidden;
      position: relative;
      .bg {
        width: 100vw;
        height: 650px;
        position: absolute;
        top: -103px;
        left: 0px;
        z-index: -1;
        background-image: linear-gradient(#ffffff, #F2FCFF);
        border: 1px solid #F2FCFF;
        border-color: #F2FCFF #F2FCFF #F2FCFF #F2FCFF;
        border-radius: 0px 0px 100% 100%;
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
  }
  .topContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    margin: auto;
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
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .icon {
      width: 168px;
      height: 102px;
      box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.16);
      border-radius: 4px;
      margin: 0 16px 16px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 140px 0 80px 0;
    text-align: center;
    .highlight {
      margin-bottom: 16px;
    }
    .halfBackground {
      margin-top: 0px;
      max-width: 620px;
    }
  }
  @media only screen and (min-width: 1400px) {
    .section {
      padding: 0 40px;
    }
  }
  @media only screen and (max-width: 1400px) {
    .section {
      padding: 0 80px;
    }
  }
  @media only screen and (max-width: 760px) {
    .quoteContainer {
      margin: 72px 0 48px 0;
    }
    .section {
      padding: 0 30px;
      &.section0 {
        padding: 120px 30px 0 30px !important;
        .bg {
          display: none;
        }
      }
      &.section1 {
        .halfBackground {
          padding: 0 20px;
        }
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
      flex-wrap: wrap-reverse;
      width: 100%;
      .text {
        flex-basis: 100%;
        text-align: center;
      }
      .secondHeading {
        margin-top: 16px;
        margin-bottom: 0px;
      }
      .bowlImage {
        margin-bottom: 32px;
        img {
          width: 100%;
        }
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
    .icons {
      .icon {
        width: 140px;
        height: auto;
      }
    }
  }
`;



