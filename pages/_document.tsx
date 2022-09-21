import React from 'react';

import Document, {
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';

import type {
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

import { setInitialColorMode } from 'utils/theme';

const setInitialColorModeScript = `
    (function() {
        ${setInitialColorMode.toString()}
        
        setInitialColorMode();
    })();
`;

interface CustomDocumentPropsType extends DocumentInitialProps {}

const CustomDocument = () => (
    <Html lang='ru'>
        <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />

            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossOrigin={'true'}
            />

            <link
                href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
                rel='stylesheet'
            />
        </Head>

        <body>
            <Main />

            <script
                dangerouslySetInnerHTML={{
                    __html: setInitialColorModeScript,
                }}
            />

            <NextScript />
        </body>
    </Html>
);

CustomDocument.getInitialProps = async (
    ctx: DocumentContext
): Promise<CustomDocumentPropsType> => {
    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
    };
};

export default CustomDocument;
