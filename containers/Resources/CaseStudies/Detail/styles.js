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
    &.readFull {
      height: 365px;
      background: #0F72EE;
      max-width: 100vw;
      button {
        margin: 5px 0 0 80px;
        width: 200px;
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
    padding: 40px 0px;
    .section {
      &.readFull {
        .center {
          flex-wrap: wrap;
        }
        button {
          margin: 24px 0 0 0px;
        }
      }
    }
  }
`;



