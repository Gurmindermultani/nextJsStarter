import styled from 'styled-components';

export const CaseStudiesStyles = styled.div`
  .section {
    max-width: 1250px;
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
      margin: 64px auto;
      height: auto;
      .slideCard {
        flex-basis: 30%;
        margin-right: 35px;
        margin-bottom: 35px;
        img {
          &.airasia {
            width: 180px;
          }
          &.cocacola {
            width: 130px;
            height: 50px;
          }
        }
      }
    }
    &.section0 {
      margin-top: 120px;
    }
    &.noPadding {
      max-width: 100vw;
      background: #0F72EE;
      padding: 0px 0;
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
      margin-bottom: 4px;
    }
    .secondHeading {
      
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
  @media only screen and (max-width: 760px) {
    .section {
      padding: 0 30px;
      .singleCard {
        width: calc(100vw - 60px);
      }
    }
    .topContainer {
      .highlight {
        margin-top: 16px;
      }
    }
  }
`;



