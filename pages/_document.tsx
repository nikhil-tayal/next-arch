import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className={'font-montserrat'}>
          <Main />
          <NextScript />
          <div id='modal-root'></div>
          <div id='alert-modal'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;