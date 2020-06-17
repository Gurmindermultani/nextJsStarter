import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap'); 
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }
  * {
    box-sizing: border-box;
  }
  * {
    outline: none;
  }
  .pointer {
    cursor: pointer;
  }
  div {
    font-family: Poppins;
  }
  .subComponent{
    margin-top: 48px;
  }
  .worspaceError{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .truncate {
    width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .wrapText {
    white-space: normal;
  }
  .multiline{
    white-space: pre-line;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .MuiPickersBasePicker-container{
    .MuiPickersToolbarButton-toolbarBtn {
      min-width: 25px;
    }
  }
  .notfound{
    width: 100vw;
    text-align: center;
    margin-top: 150px;
  }
  .hidden {
    display: none;
  }

  .pointer {
    cursor: pointer;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .anchor {
    text-decoration: underline;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .halfBackground {
    position: relative;
    ${'' /* background: linear-gradient(to top, #fff, #fff, #CCF5FF 30%, #fff 50%); */}
    background: linear-gradient(to top, #fff 20%, #00CEFF40 20%, #00CEFF40 50%, #fff 50% );
  }

  .halfBackground:before {
    content: "";
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 5px;
    left: 0px;
    opacity: 0.2;
    z-index: -1;
  }
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  .textCenter {
    text-align: center;
  }
  .heroBg {
    height: 780px;
    position: absolute;
    bottom: -40px;
    left: -80px;
    z-index: -2;
  }
  @media only screen and (max-width: 760px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export default GlobalStyle;
