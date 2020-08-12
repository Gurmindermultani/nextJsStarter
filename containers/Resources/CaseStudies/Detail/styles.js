import styled from 'styled-components';

export const CaseStudiesStyles = styled.div`
  margin-top: 80px;
  .section {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &.comment, &.numberContainer, &.expression {
      max-width: 100vw;
      background: #F6F6F6;
    }
    &.quote {
      max-width: 100vw;
      background: #F6F6F6;
      .quoteContainer {
        max-width: 1200px;
        margin: auto;
        padding: 48px 0;
        align-items: flex-start;
      }
    }
    &.readFull {
      height: 300px;
      background: #0F72EE;
      max-width: 100vw;
      position: relative;
      .text {
        padding: 0 30px;
      }
      .topLeft {
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 80px;
        }
      }
      .bottomRight {
        position: absolute;
        bottom: 0;
        right: 0;
        img {
          width: 80px;
        }
      }
      button {
        margin: 5px 0 0 80px;
        width: 210px;
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
    padding: 40px 0px 0 0;
    .section {
      &.readFull {
        .center {
          flex-direction: column;
          text-align: center;
        }
        button {
          margin: 24px 0 0 0px;
        }
        .topLeft {
          img {
            width: 50px;
          }
        }
        .bottomRight {
          img {
            width: 50px;
          }
        }
      }
      &.quote {
        background: #F6F6F6;
        padding: 0 30px;
        .quoteContainer {
          max-width: 1200px;
          margin: auto;
          padding: 24px 0;
          align-items: flex-start;
        }
      }
    }
  }
`;



