import styled from 'styled-components';

export const LeadStyles = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10rem;
    background: #fff;
    &.noPadding {
      margin-top: 150px;
      padding: 0;
      background: #0F72EE;
      .halfBackground {
        z-index: 1;
      }
      .halfBackground:before {
        background: #1166D6;
        z-index: 0;
      }
    }
    .knowMore {
      margin-top: 100px;
      button {
        width: 172px;
      }
    }
    &.header {
      justify-content: space-between;
      flex-direction: row;
      margin-top: 32px;
    }
    &.section0 {
      position: relative;
      padding-bottom: 100px;
      z-index: 1;
      .textContainer {
        margin: 60px auto;
      }
      .formContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .leftContainer {
          flex-basis: 50%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .rightContainer {
          flex-basis: 40%;
          form {
            margin-top: 20px;
          }
        }
      }
      .trap {
        height: 65%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 100px solid transparent;
        border-left: 100vw solid #0F72EE;
        transform: scaleX(-1);
        z-index: -1;
      }
    }
    &.section2 {
      background: #0F72EE;
      padding-top: 80px;
      padding-bottom: 80px;
      .quoteContainer {
        margin: 0 0 50px 0;
        span {
          color: white;
        }
      }
    }
    &.section4 {
      margin-top: 120px;
      background: #0F72EE;
      padding-top: 120px;
      padding-bottom: 120px;
      .container {
        display: flex;
        align-items: center;
        button {
          width: 272px;
          margin-left: 30px;
        }
      }
    }
    &.mobile {
      display: none;
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
      margin-top: 0px;
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
      &.noPadding {
        .form-group {
          display: none;
        }
        button {
          margin-top: 30px;
        }
      }
      &.header {
        justify-content: center;
        margin-top: 40px;
      }
      &.section0 {
        .textContainer {
          margin: 30px 20px;
        }
        .formContainer {
          flex-wrap: wrap-reverse;
          .leftContainer {
            flex-basis: 100%;
          }
          .rightContainer {
            flex-basis: 100%;
          }
        }
      }
      &.section4 {
        .container {
          flex-wrap: wrap;
          button {
            margin-top: 20px;
          }
        }
      }
      &.mobile {
        display: block;
        padding: 30px 30px;
        >div {
          justify-content: space-between;
        }
      }
    }
  }
`;



