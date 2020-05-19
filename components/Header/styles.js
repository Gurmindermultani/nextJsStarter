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

