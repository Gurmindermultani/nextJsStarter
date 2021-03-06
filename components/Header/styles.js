import styled from 'styled-components';

export const HeaderStyles = styled.div`
  height: 80px;
  z-index: 4;
  width: 100vw;
  position: fixed;
  top: 0px;
  .logo {
    padding-top: 8px;
    min-width: 142px;
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
      padding: 20px 20px 20px 20px;
      position: relative;
      transition: all 0.5s ease;
      .links {
        display: none;
        position: absolute;
        top: 60px;
        background: white;
        padding: 6px 16px 16px 16px;
        min-width: 200px;
        border-radius: 4px;
        box-shadow: 0 0 24px 1px rgba(19,24,29,.12);
        .header-pointer {
          content: "";
          position: absolute;
          border-color: transparent;
          border-width: 1px 0 0 1px;
          border-style: solid;
          top: -7px;
          left: 15px;
          height: 15px;
          width: 15px;
          background: inherit;
          transform: rotate(45deg);
        }
        .link {
          margin-top: 10px;
          cursor: pointer;
          padding: 4px 8px;
          &.selected {
            span {
              color: #0F72EE;
            }
          }
          &:hover {
            span {
              color: #0F72EE;
            }
            background: #f6f6f6;
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
    a {
      &:hover {
        span {
          color: #212121;
        }
      }
    }
    .phoneImage {
      margin-right: 16px;
    }
    .mailImage {
      margin: 0 8px 0 0px;
    }
    span {
      opacity: 0.8;
    }
  }
  .buttons {
    button {
      width: 142px;
    }
    &.mobile {
      padding-top: 4px;
      svg {
        fill: #212121;
      }
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
      padding: 0 25px 0 30px;
      .groupNav {
        display: none;
      }
    }
    .mobile {
      .playDiv {
        > div {
          > div {
            height: 40px;
          }
        }
      }
    }
  }
`;

