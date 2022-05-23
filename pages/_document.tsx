import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
    render() {
        return (
          <Html>
            <Head>
              {/* code for head in future */}
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    };
};

export default AppDocument;
