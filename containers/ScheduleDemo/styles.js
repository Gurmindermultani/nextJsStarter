import styled from 'styled-components';

export const ScheduleDemoStyles = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  margin-top: 80px;
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
        &.airasia {
          height: 90px;
        }
        &.rpg {
          height: 30px;
          margin-top: 30px;
        }
        &.oneplus {
          width: 130px;
          margin-top: 10px;
        }
        &.cocacola {
          width: 130px;
          margin-top: 5px;
        }
        &.tata {
          width: 160px;
          height: 20px;
          margin-top: 30px;
        }
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

