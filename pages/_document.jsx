import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="id-ID">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="author" content="M Fathur" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <link
                        rel="icon"
                        href="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025900/logo_mkyalm.png"
                        type="image/x-icon"
                    />
                    <meta name="robots" content="Index,Follow" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
