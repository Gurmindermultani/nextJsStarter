import styled from 'styled-components';

export const AboutUsStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
    &.section0 {
      padding: 140px 30px 0 30px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .leftContainer {
        flex-basis: 70%;
        .para {
          margin-top: 32px;
          &.first {
            margin-top: 48px;
          }
        }
      }
      .rightContainer {
        flex-basis: 20%;
      }
    }
    &.noMargin {
      margin-top: 120px;
      padding: 0;
      max-width: none;
      .quoteContainer {
        margin: 0;
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
  @media only screen and (min-width: 1400px) {
    .section {
      padding: 0 40px;
      &.section0 {
        padding: 140px 0px 0 0px;
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
      margin: 72px 0 48px 0;
      .halfBackground {
        margin-top: 12px;
        width: 80%;
      }
    }
    .section {
      padding: 0 30px;
      &.section0 {
        padding-top: 120px;
        flex-wrap: wrap;
        .leftContainer {
          flex-basis: 100%;
          .para {
            margin-top: 16px;
            &.first {
              margin-top: 24px;
            }
          }
        }
        .rightContainer {
          display: none;
        }
      }
      &.section1 {
        padding: 0 0px;
      }
      &.noMargin {
        margin-top: 4;
        height: auto;
      }
    }
  }
`;