import styled from 'styled-components';

export const CaseStudiesStyles = styled.div`
  .section {
    height: calc(100vh);
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &.shortSection {
      height: 600px;
      padding-bottom: 100px;
    }
    &.section1 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      .slideCard {
        flex-basis: 30%;
        margin-right: 35px;
        img {
          &.airasia {
            width: 110px;
          }
          &.cocacola {
            width: 130px;
            height: 50px;
          }
        }
      }
    }
    &.section0 {
      margin-top: 20px;
      height: calc(100vh - 400px);
    }
    &.section2 {
      margin: 50px auto;
      height: calc(100vh + 150px);
    }
    &.section5 {
      .quoteContainer {
        margin-bottom: 40px;
      }
    }
    &.section7 {
      height: calc(100vh - 350px);
    }
    &.section8 {
      height: calc(100vh - 450px);
    }
    &.demoSecion {
      height: calc(100vh - 150px);
      margin: 0;
      max-width: 100vw;
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
    justify-content: center;
    text-align: center;
    .topText {
      margin-bottom: 16px;
    }
    .secondHeading {
      margin-top: 10px;
      margin-bottom: 5px;
    }
    .bowlImage {
      position: relative;
      .animation {
        position: absolute;
        top: 2px;
        left: 43px;
        z-index: -1;
        width: 227px;
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



