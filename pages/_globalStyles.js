import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
  /* latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
    &:hover {
      span {
        color: ${props => props.theme.palette.primary.main};
      }
    }
  }
  ${'' /* .halfBackground {
    position: relative;
    background: linear-gradient(to top, #fff 10%, #00CEFF40 20%, #00CEFF40 50%, #fff 50% );
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
  } */}
  .highlight {
    padding: 0 8px;
    background: ${props => props.theme.palette.primary.light}40;
  }
  .invertedHighlight {
    padding: 0 8px;
    background: ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.primary.main} !important;
  }
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  .section.mobile {
    display: none !important;
  }
  .section.desktop {
    display: flex !important;
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
  ul {
    li {
      color: #0F72EE;
    }
  }
  .MuiDialog-container {
    .MuiDialog-paper {
      border-radius: 12px;
    }
  }
  @media only screen and (max-width: 760px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
    .section.desktop {
      display: none !important;
    }
    .section.mobile {
      display: flex !important;
      padding: 0 20px !important;
      .quoteContainer {
        padding: 0 10px !important;
      }
    }
    .section0 {
      .topContainer {
        button {
          height: 40px;
        }
      }
    }
    .highlight {
      margin-bottom: 2px;
    }
    .invertedHighlight {
      padding: 0;
      background: inherit;
      color: inherit;
    }
  }
  @media only screen and (max-width: 399px) {
    .highlight {
      background: none;
    }
  }
`;

export default GlobalStyle;
