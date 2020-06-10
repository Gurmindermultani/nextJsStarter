import Head from 'next/head'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CaseStudies from '../../../containers/Resources/CaseStudies';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leena.AI - Case Studies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <CaseStudies />
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