import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  * {
    outline: none;
  }
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap'); 
  .pointer {
    cursor: pointer;
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
  .halfBackground {
    position: relative;
  }
  a {
    text-decoration: none;
  }

  .halfBackground:before {
    content: "";
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #00CEFF;
    opacity: 0.2;
    z-index: -1;
  }
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
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
