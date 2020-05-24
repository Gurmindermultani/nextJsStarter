import styled from 'styled-components';

export const HeaderStyles = styled.div`
  height: 80px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  top: 0px;
  z-index: 2;
  background: white;
  padding: 0 70px;
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
      padding: 5px 0;
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
  @media only screen and (max-width: 760px) {
    padding: 0 15px;
  }
`;

