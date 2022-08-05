import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Normalize } from 'styled-normalize'

import { stylesInit } from '@/styles/stylesInit'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Work+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <Normalize />
                </Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: stylesInit
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
