import App from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'
import { ThemeProvider } from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from '../theme';
import GlobalStyle from './_globalStyles';
import CrashReporter from '../utils/carshReporter';
import CookieBanner from '../components/CookieBanner';

const tagManagerArgs = {
  gtmId: 'GTM-W2SN9RH'
}

export default class MyApp extends App {
  componentDidMount() {
    if (process.env.NEXT_PUBLIC_ENV === "staging" || process.env.NEXT_PUBLIC_ENV === "production") {
      CrashReporter();
      TagManager.initialize(tagManagerArgs);
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
        <CookieBanner />
      </ThemeProvider>
    )
  }
}