import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Integrations from '../containers/Integrations';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Integrations | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="With Leena AI integrations, take the conversational AI platform wherever your employees are."></meta>
        <meta name="keywords" content="Leena AI integrations, Leena AI integration capabilities, Integrations with Leena AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <Integrations />
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
        }
      `}</style>
    </div>
  )
}
