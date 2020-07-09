import styled from 'styled-components';

export const ContactUsStyles = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  max-width: 1180px;
  margin: 80px auto;
  margin-bottom: 0;
  justify-content: space-between;
  .leftContainer {
    flex-basis: 60%;
    margin-top: 70px;
    .textCenter {
      text-align: left;
    }
    .demoText {
      margin: 10px 0;
    }
    .middleText {
      margin: 0px 0;
    }
    .textDetail {
      margin: 30px 0;
      line-height: 32px;
    }
    .contact {
      margin-top: 30px;
      .row {
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        &.mail {
          span {
            padding: 0 0 5px 5px;
          }
        }
        &.pin {
          align-items: flex-start;
          line-height: 40px;
          img {
            padding-top: 8px;
          }
        }
        img {
          margin-right: 20px;
        }
      }
    }
    .demo {
      margin-top: 100px;
      .anchor {
        margin-left: 12px;
      }
    }
  }
  .rightContainer {
    flex-basis: 35%;
    margin-top: 80px;
    .form {
      width: 80%;
      margin: auto;
      .form-group {
        margin-top: 0;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    flex-wrap: wrap;
    height: auto;
    .demoText, .middleText {
      text-align: center;
    }
    .mobile {
      margin-top: 0px;
    }
    .leftContainer {
      flex-basis: 100%;
      padding: 60px 30px;
      margin-top: 0px;
      .textCenter {
        text-align: center;
      }
    }
    .rightContainer {
      flex-basis: 100%;
      padding: 0px 0px;
      margin-top: 24px;
    }
  }
`;

