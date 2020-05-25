import styled from 'styled-components';

export const ScheduleDemoStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 20px 0;
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .phoneImage {
      margin-right: 16px;
    }
    .mailImage {
      margin: 0 16px 0 32px;
    }
    span {
      opacity: 0.8;
    }
  }
  .body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .form {
      width: 400px;
      margin-top: 24px;
      .errorContainer {
        padding: 0;
      }
      button {
        margin-top: 25px;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.4;
    img {
      height: 40px;
      width: 100px;
      &.airasia {
        height: 90px;
      }
      &.rpg {
        height: 30px;
      }
      &.oneplus {
        width: 130px;
      }
      &.cocacola {
        width: 130px;
      }
      &.tata {
        width: 160px;
        height: 20px;
      }
    }
  }
`;

