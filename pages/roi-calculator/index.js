import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ROICalculator from '../../containers/Resources/ROICalculator';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RoI calculator | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Estimate the potential return on investment you'd derive from Leena AI for your business."></meta>
        <meta name="keywords" content="Leena AI RoI calculator, estimate Leena AI RoI, potential RoI from Leena AI, Leena AI return on investment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <ROICalculator />
      </main>

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
