import styled from 'styled-components';

export const HomePageStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    &.section0 {
      padding: 180px 20px 120px 20px;
    }
    &.noMargin {
      margin-top: 190px;
      padding: 0;
      max-width: none;
      .quoteContainer {
        margin: 0;
      }
    }
    &.section4 {
      margin-top: 100px;
      margin-bottom: 80px;
      .quoteContainer {
        margin: 10px 0 64px 0;
        padding: 0 30px;
      }
    }
    .knowMore {
      margin-top: 100px;
      button {
        width: 172px;
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
  @media only screen and (min-width: 1400px) {
    .section {
      padding: 0 40px;
      &.section0 {
        padding: 180px 0px 0 0px;
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
      padding: 0 30px;
    }
    .section {
      padding: 0 30px;
      &.section0 {
        padding: 120px 20px 20px 20px;
      }
      &.section4, &.section6, &.section7, &.section9 {
        padding: 0;
      }
      &.section4 {
        margin-top: 100px;
        margin-bottom: 0px;
        .quoteContainer {
          margin: 10px 0 64px 0;
          padding: 0 30px;
        }
      }
      &.noMargin {
        margin-top: 120px;
        height: auto;
      }
    }
  }
`;

