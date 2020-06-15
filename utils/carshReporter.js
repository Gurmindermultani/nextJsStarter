import * as Sentry from '@sentry/browser';
import pjson from '../package.json';

const CrashReporter = () => {
  try {
    if (process.env.NEXT_PUBLIC_ENV !== 'development') {
      // intialise sentry for cash report
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN_URL,
        environment: process.env.NEXT_PUBLIC_ENV,
        release: pjson.version,
      });
    }
  } catch (e) {
    console.log('Crash Reporter Intialisation Failed.');
  }
};

export default CrashReporter;
