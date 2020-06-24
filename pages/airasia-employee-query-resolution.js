import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Detail from '../containers/Resources/CaseStudies/Detail';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AirAsia employee query resolution - Case study | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="AirAsia transformed employee query resolution with Leena AI. Download the case study and discover the transformative journey of AirAsia. "></meta>
        <meta name="keywords" content="AirAsia employee query resolution, AirAsia conversational AI, AirAsia Leena AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <Detail pdfName="Airasia-Case-Study.pdf" pdf='https://leena-ai-public.s3.ap-south-1.amazonaws.com/leena.ai/cast-studies/airasia-leena-ai-case-study.pdf' type="airasia" />
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
          background: #f6fdff;
        }
      `}</style>
    </div>
  )
}
