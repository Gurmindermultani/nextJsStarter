import styled from 'styled-components';

export const HomePageStyles = styled.div`
  margin: auto;
  .section {
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 100px;
    padding-bottom: 40px;
    &.shortSection {
      height: 450px;
      padding-bottom: 100px;
    }
    .knowMore {
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

