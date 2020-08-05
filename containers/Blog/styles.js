import styled from 'styled-components';

export const AboutUsStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    &.section0 {
      padding: 80px 0px 0 0px;
      iframe {

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

      }
    }
  }
`;