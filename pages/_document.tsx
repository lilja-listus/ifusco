import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const getInitialProps: DocumentInitialProps = await Document.getInitialProps(ctx);
        return { ...getInitialProps };
    }

    render(): JSX.Element {
        return (<Html>
            <Head >
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>);
    }
}

export default MyDocument;
