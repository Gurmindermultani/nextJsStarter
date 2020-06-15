import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from '../theme';
import GlobalStyle from './_globalStyles';
import CrashReporter from '../utils/carshReporter';

export default class MyApp extends App {
  componentDidMount() {
    CrashReporter();
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}