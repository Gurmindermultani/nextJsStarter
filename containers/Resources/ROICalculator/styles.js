import styled from 'styled-components';

export const ROIStyles = styled.div`
  .topForm {
    display: flex;
    max-width: 1200px;
    margin: 80px auto;
    margin-bottom: 0;
    justify-content: space-between;
    align-items: center;
    .leftContainer {
      flex-basis: 44%;
      .textCenter {
        text-align: left;
      }
      .demoText {
        margin: 10px 0;
      }
      .middleText {
        margin: 10px 0;
      }
      .textDetail {
        margin: 48px 0;
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
      flex-basis: 44%;
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
    .lower {
      border-top: 1px solid #EEEEEE;
      padding-top: 38px;
    }
  }
  .result {
    max-width: 1200px;
    margin: 180px auto;
    .header {
      text-align: center;
    }
    .body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 96px 0;
      .textCont {
        display: flex;
        height: 280px;
        flex-direction: column;
        justify-content: space-between;
        .row {
          display: flex;
          padding: 24px;
          background: #FFFFFF 0% 0% no-repeat padding-box;
          box-shadow: 0px 10px 46px #00000029;
          border-radius: 10px;
          .text {
            display: flex;
            flex-direction: column;
          }
          .value {
            padding-top: 6px;
          }
          img {
            width: 56px;
            margin-right: 16px;
          }
        }
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      button {
        margin-left: 24px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    height: auto;
    .demoText, .halfBackground {
      text-align: center;
    }
    .mobile {
      margin-top: 36px;
    }
    .leftContainer {
      flex-basis: 100%;
      padding: 60px 30px;
      .textCenter {
        text-align: center;
      }
    }
    .rightContainer {
      flex-basis: 100%;
      padding: 0px 0px;
    }
  }
`;

