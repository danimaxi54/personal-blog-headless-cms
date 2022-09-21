import type { FC } from 'react';

import React from 'react';

import { Image } from 'react-bootstrap';

import type { BlogHeaderPropsType } from './types';

const BlogHeader: FC<BlogHeaderPropsType> = ({
    author,
    date,
    subtitle,
    coverImage= '',
    title,
}) => (
    <div className='blog-detail-header'>
        <div className='lead mb-0'>
            <Image
                src={author.avatar}
                className='rounded-circle mr-3'
                height='50px'
                width='50px'
                alt='avatar'
            />

            {author.name}{', '}

            {date}
        </div>

        <h1 className='font-weight-bold blog-detail-header-title mb-0'>
            {title}
        </h1>

        <h2 className='blog-detail-header-subtitle mb-3'>
            {subtitle}
        </h2>

        {coverImage && (
            <div className='header-image'>
                <Image
                    className='img-fluid rounded'
                    src={coverImage}
                    alt='Header image'
                />
            </div>
        )}
    </div>
);

export default BlogHeader;
