import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* devanagari */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z11lFd2JQEl8qw.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1JlFd2JQEl8qw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* devanagari */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format('woff2');
    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
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
