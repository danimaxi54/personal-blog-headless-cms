import type { FC } from 'react';

import React from 'react';

import { Image } from 'react-bootstrap';

import BlockContent from '@sanity/block-content-to-react';

import HighlightCode from 'components/HighlightCode/HighlightCode';

import { urlFor } from 'lib/api';

import type {
    BlogContentPropsType,
    SerializersType,
    SerializersCodeDataPropsType,
    SerializersImageDataPropsType,
} from './types';

const serializers: SerializersType = {
    types: {
        code: ({ node: {
            language,
            code,
            filename
        }}: SerializersCodeDataPropsType): JSX.Element => (
            <HighlightCode language={language}>
                {code}

                <div className='code-filename'>
                    {filename}
                </div>
            </HighlightCode>
        ),

        image: ({ node: {
            asset,
            alt,
            position = 'center'
        } }: SerializersImageDataPropsType): JSX.Element => (
            <div className={`blog-image blog-image-${position}`}>
                <Image
                    src={
                        urlFor(asset.url)
                            .height(300)
                            .fit('max')
                            .url()
                }
                    alt={alt}
                />

                <div className='image-alt'>
                    {alt}
                </div>
            </div>
        ),
    },
};

const BlogContent: FC<BlogContentPropsType> = ({ content }) => (
    <BlockContent
        className='block-content'
        blocks={content}
        serializers={serializers}
    />
);

export default BlogContent;
