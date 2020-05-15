import styled from 'styled-components';

export const HeaderStyles = styled.div`
  height: 48px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  position: fixed;
  width: 100vw;
  top: 0px;
  z-index: 2;
  background: white;
  padding: 0 30px;
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
  @media only screen and (max-width: 760px) {
    padding: 0 15px;
  }
`;

