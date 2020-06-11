import styled from 'styled-components';

export const HomePageStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10rem;
    &.section0 {
      padding-top: 100px;
    }
    &.noMargin {
      margin-top: 190px;
      padding: 0;
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
    margin: 150px 0 120px 0;
    text-align: center;
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
    .quoteContainer {
      margin: 100px 0 72px 0;
    }
    .section {
      padding: 0 30px;
      &.noMargin {
        margin-top: 120px;
        height: auto;
      }
    }
  }
`;

