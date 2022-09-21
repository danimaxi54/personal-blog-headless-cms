import type { FC } from 'react';

import React from 'react';

import Link from 'next/link';

import { Card } from 'react-bootstrap';

import { urlFor } from 'lib/api';

import type { CardItemPropsType } from './types';

const CardItem: FC<CardItemPropsType> = ({
    title,
    subtitle,
    date,
    image = '',
    author,
    link
}) => (
    <Card className='fj-card'>
        <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
            <Card.Header
                className='d-flex flex-row'
            >
                <Card.Img
                    src={author.avatar}
                    className='rounded-circle mr-3'
                    alt='avatar'
                />

                <div>
                    <Card.Title className='font-weight-bold mb-1'>
                        {author.name}
                    </Card.Title>

                    <Card.Text className='card-date'>
                        {date}
                    </Card.Text>
                </div>
            </Card.Header>

            <div className='image-container'>
                <div className='view overlay'>
                    {image && (
                        <>
                            <Card.Img
                                src={
                                    urlFor(image)
                                        .height(300)
                                        .crop('center')
                                        .fit('clip')
                                        .url()
                                }
                                alt='Card image'
                            />

                            <Card.Img
                                src={
                                    urlFor(image)
                                        .height(300)
                                        .crop('center')
                                        .fit('clip')
                                        .url()
                                }
                            />
                        </>
                    )}
                </div>
            </div>

            <Card.Body>
                <Card.Title className='card-main-title'>
                    {title.length > 40
                        ? title.slice(0, 40) + '...'
                        : title
                    }
                </Card.Title>

                <Card.Text>
                    {subtitle.length > 40
                        ? subtitle.slice(0, 40) + '...'
                        : subtitle
                    }
                </Card.Text>
            </Card.Body>
        </div>

        {link && (
            <Link {...link}>
                <a className='card-button'>
                    Read More
                </a>
            </Link>
        )}
    </Card>
);

export default CardItem;
