import Document, { Html, Head, Main, NextScript } from 'next/document'

class FairRateDocument extends Document {

  render() {
    return (
      <Html lang="en" className="font-serif">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default FairRateDocument
