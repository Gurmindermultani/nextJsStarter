import styled from 'styled-components';

export const ScheduleDemoStyles = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  max-width: 1200px;
  margin: 80px auto;
  justify-content: space-around;
  align-items: center;
  .leftContainer {
    flex-basis: 40%;
    .demoText {
      margin: 10px 0;
    }
    .middleText {
      margin: 10px 0;
    }
    .textDetail {
      margin: 30px 0;
      line-height: 32px;
    }
    .clients {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      opacity: 0.4;
      img {
        height: 51px;
        width: 90px;
        filter: grayscale(100%);
        margin-bottom: 10px;
      }
    }
  }
  .rightContainer {
    flex-basis: 40%;
    .form {
      padding: 56px;
      width: 80%;
      margin: auto;
      box-shadow: 0px 6px 40px #00000029;
      border-radius: 20px;
      .form-group {
        margin-top: 0;
      }
    }
  }
`;

