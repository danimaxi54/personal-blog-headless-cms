import type { FC } from 'react';

import React from 'react';

import Link from 'next/link';

import {
    Card,
    Image
} from 'react-bootstrap';

import type { CardListItemPropsType } from './types';

const CardListItem: FC<CardListItemPropsType> = ({
    title,
    subtitle,
    date,
    author,
    link
}) => (
    <Card className={`fj-card fj-card-list`}>
        <div className='card-body-wrapper'>
            <Card.Header className='d-flex flex-row'>
                <Image
                    src={author.avatar}
                    className='rounded-circle mr-3'
                    height='50px'
                    width='50px'
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

            <Card.Body>
                <Card.Title className='card-main-title'>
                    {title.length > 85
                        ? title.slice(0, 85) + '...'
                        : title
                    }
                </Card.Title>

                <Card.Text>
                    {subtitle.length > 150
                        ? subtitle.slice(0, 150) + '...'
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

export default CardListItem;
