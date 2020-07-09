import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CaseStudies from '../../containers/Resources/CaseStudies';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Read customer success stories and case studies | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore Leena AI case studies and know the RoI our customers have achieved. Be the next to be featured in our customer success stories."></meta>
        <meta name="keywords" content="Leena AI case studies, Leena AI customer success stories, Leena AI customers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
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
          background-image: linear-gradient(#F2FCFF, #ffffff);
        }
      `}</style>
    </div>
  )
}
