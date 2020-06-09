import styled from 'styled-components';

export const ContactUsStyles = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  margin-top: 80px;
  justify-content: space-around;
  align-items: center;
  .leftContainer {
    flex-basis: 50%;
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
    flex-basis: 30%;
    .form {
      width: 80%;
      margin: auto;
      .form-group {
        margin-top: 0;
      }
    }
  }
`;

