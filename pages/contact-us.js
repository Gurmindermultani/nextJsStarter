import Head from 'next/head'
import Header from '../components/Header';
import ContactUs from '../containers/Company/ContactUs';

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact us | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Whether you have a question about product, features, pricing, live demo, or anything else, we are here to help."></meta>
        <meta name="keywords" content="Contact Leena AI, Leena AI contact info, Leena AI contact number, Leena AI customer support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <ContactUs />
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
          background: #f6fdff;
        }
      `}</style>
    </div>
  )
}
