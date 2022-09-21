import type { AppProps as NextAppProps } from 'next/app';

import React from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

import NextNProgress from 'nextjs-progressbar';

import {
    library,
    config
} from '@fortawesome/fontawesome-svg-core';

import {
    fas,
    faSun,
    faMoon,
    faBorderAll,
    faList,
    faSortNumericDown,
    faSortNumericUp
} from '@fortawesome/free-solid-svg-icons';

import { urlFor } from 'lib/api';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/a11y-dark.css';
import 'react-toggle/style.css';
import 'styles/index.scss';

config.autoAddCss = false;

library.add(
    faList,
    faBorderAll,
    faSortNumericDown,
    faSortNumericUp,
    faSun,
    faMoon,
    fas
);

import ThemeProver from 'providers/ThemeProvider';

import {
    SITE_NAME,
    SITE_DESCRIPTION
} from 'constants/system';

interface PagePropsType {
    blog: {
        title: string;
        subtitle: string;
        coverImage: string;
    };
}

interface AppPropsType extends NextAppProps<PagePropsType> {
    pageProps: PagePropsType;
}

const App = ({
    Component,
    pageProps,
}: AppPropsType): JSX.Element => {
    const {
        blog: {
            title = SITE_NAME,
            subtitle = SITE_NAME,
            coverImage = '',
        } = {},
    } = pageProps;

    const { asPath } = useRouter();

    const urlWithoutParams = asPath.split('?')[0];
    const canonicalUrl = process.env.NEXT_PUBLIC_DOMAIN + urlWithoutParams;
    const slashedCanonicalUrl = `${canonicalUrl}`.replace(/\/?$/, '/');

    return (
        <>
            <Head>
                <title>{title}</title>

                <link
                    rel={'shortcut icon'}
                    href={'/favicon.ico'}
                />

                <link
                    rel={'shortcut icon'}
                    type={'image/x-icon'}
                    href={'/favicon.svg'}
                />

                <link
                    rel={'apple-touch-icon-precomposed'}
                    href={'/favicon.png'}
                />

                <link
                    rel={'apple-touch-icon'}
                    href={'favicon.png'}
                />

                <link
                    rel={'manifest'}
                    href={'/manifest.json'}
                />

                <meta
                    name={'title'}
                    content={title}
                />

                <meta
                    name={'description'}
                    content={
                        asPath === '/'
                            ? SITE_DESCRIPTION
                            : subtitle
                    }
                />

                <link
                    rel={'canonical'}
                    href={slashedCanonicalUrl}
                />

                <meta
                    name={'robots'}
                    content={'index, follow, all'}
                />

                <meta
                    name={'viewport'}
                    content={'initial-scale=1.0, width=device-width'}
                />

                <meta
                    httpEquiv={'Content-Type'}
                    content={'text/html; charset=utf-8'}
                />

                <meta
                    property={'og:site_name'}
                    content={SITE_NAME}
                />

                <meta
                    property={'og:title'}
                    content={title}
                />

                <meta
                    property={'og:description'}
                    content={subtitle}
                />

                <meta
                    property={'og:type'}
                    content={'website'}
                />

                {coverImage && (
                    <meta
                        property={'og:image'}
                        content={
                            urlFor(coverImage)
                                .crop('center')
                                .fit('clip')
                                .url()
                        }
                    />
                )}

                <meta
                    property='og:url'
                    content={process.env.NEXT_PUBLIC_DOMAIN + asPath}
                />

                <meta
                    property={'og:locale'}
                    content={'ru_RU'}
                />

                <meta
                    name={'author'}
                    content={'Ivanov D.'}
                />

                <meta
                    name={'publisher'}
                    content={'Ivanov D.'}
                />

                <meta
                    name={'keywords'}
                    content={title}
                />

                <meta
                    name={'geo.placename'}
                    content={'Россия'}
                />

                <meta
                    name={'geo.region'}
                    content={'RU'}
                />

                <meta
                    name={'supported-color-schemes'}
                    content={'light dark'}
                />

                <meta
                    name={'color-scheme'}
                    content={'light dark'}
                />

                <meta
                    name={'theme-color'}
                    media={'(prefers-color-scheme: light)'}
                    content={'white'}
                />

                <meta
                    name={'theme-color'}
                    media={'(prefers-color-scheme: dark)'}
                    content={'black'}
                />
            </Head>

            <NextNProgress
                color={'#29D'}
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={false}
                nonce={''}
                options={{
                    easing: 'ease',
                    speed: 350,
                    showSpinner: false
                }}
            />

            <ThemeProver>
                <Component {...pageProps} />
            </ThemeProver>
        </>
    );
};

export default App;
