import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Engagement from '../containers/Products/Engagement';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Employee engagement platform with AI-powered conversations | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Amplify employee engagement with AI-powered employee engagement software. Take conversational periodic surveys and give your employees the best experience."></meta>
        <meta name="keywords" content="employee engagement platform, employee experience platform, employee engagement software, employee engagement automation, employee engagement, employee engagement surveys, AI-driven employee engagement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta property="og:image" content="https://leena.ai/images/og/engage.png" />
        <meta property="og:title" content="Employee engagement platform with AI-driven insights" />
        <meta property="og:description" content="Take conversational periodic surveys and amplify employee engagement." />
        <meta property="og:url" content="https://leena.ai/employee-engagement" />
      </Head>
      <Header />
      <main>
        <Engagement />
      </main>

      <footer>
        <Footer />
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          width: 100%;
        }

        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          background-image: linear-gradient(#F2FCFF, #ffffff);
        }
      `}</style>
    </div>
  )
}
