import styled from 'styled-components';

export const HeaderStyles = styled.div`
  height: 80px;
  z-index: 2;
  width: 100vw;
  position: fixed;
  top: 0px;
  .logo {
    min-width: 114px;
  }
  .animatedHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0px;
    left: 0;
    background: white;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 70px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  }
  .mainHeader {
    display: flex;
    align-items: center;
  }
  .userProfileContainer {
    margin-left: auto;
    display: flex;
    align-items: center;
    align-self: center;
  }
  .navigation {
    display: flex;
    .groupNav {
      margin-right: 44px;
      padding: 6px 0;
      position: relative;
      transition: all 0.5s ease;
      .links {
        display: none;
        position: absolute;
        top: 30px;
        background: white;
        padding: 6px 16px 16px 16px;
        min-width: 200px;
        border-radius: 4px;
        box-shadow: 0px 4px 16px #00000014;
        .link {
          margin-top: 10px;
          cursor: pointer;
          &:hover {
            span {
              color: #0F72EE;
            }
          }
        }
      }
      .groupName{
        display: flex;
        align-items: center;
        img {
          transition: all 0.5s ease;
          width: 12px;
          height: 6px;
          margin-left: 8px;
        }
      }
      &:hover {
        .links {
          display: block;
        }
        img {
          transform: rotate(-180deg);
        }
      }
    }
  }
  .demo {
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
  .buttons {
    button {
      width: 142px;
    }
  }
  .mobileMenu {
    z-index: 2;
    width: 100vw;
    position: fixed;
    top: 60px;
  }
  @media only screen and (max-width: 760px) {
    height: 60px;
    .animatedHeader {
      padding: 0 6px 0 30px;
      .groupNav {
        display: none;
      }
    }
    .mobile {
      .playDiv {
        > div {
          > div {
            height: 50px;
          }
        }
      }
    }
  }
`;

