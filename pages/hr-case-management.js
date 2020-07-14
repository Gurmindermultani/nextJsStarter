import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseManagement from '../containers/Products/CaseManagement';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HR case management platform driven by conversational AI | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Enhance HR service delivery with AI-driven employee case management. Discover the power of conversational HR ticketing platform."></meta>
        <meta name="keywords" content="HR case management, employee case management, employee ticketing system, HR ticketing platform, HR service delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta property="og:image" content="https://leena.ai/images/og/case.png" />
        <meta property="og:title" content="AI-driven HR case management platform" />
        <meta property="og:description" content="Discover the power of conversational employee ticketing platform." />
        <meta property="og:url" content="https://leena.ai/hr-case-management" />
      </Head>
      <Header />
      <main>
        <CaseManagement />
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
