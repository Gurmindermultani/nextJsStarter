import styled from 'styled-components';

export const HomePageStyles = styled.div`
  margin: auto;
  .block {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .quoteContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0 100px 0;
    &.demoContainer {
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

