import type { FC } from 'react';

import React from 'react';

import moment from 'moment';

import { Col } from 'react-bootstrap';

import CardListItem from 'components/CardListItem/CardListItem';
import CardItem from 'components/CardItem/CardItem';

import type { BlogListPropsType } from './types';

const BlogList: FC<BlogListPropsType> = ({
    blogs,
    view
}) => (
    <>
        {blogs.map((blog) => (
            view.list
                ? (
                    <Col
                        key={`${blog.slug}-list`}
                        md="9"
                    >
                        <CardListItem
                            title={blog.title}
                            subtitle={blog.subtitle}
                            date={moment(blog.date).format('LL')}
                            author={blog.author}
                            link={{
                                href: '/blogs/[slug]',
                                as: `/blogs/${blog.slug}`
                            }}
                        />
                    </Col>
                )
                : (
                    <Col
                        key={blog.slug}
                        lg="4"
                        md="6"
                    >
                        <CardItem
                            title={blog.title}
                            subtitle={blog.subtitle}
                            date={moment(blog.date).format('LL')}
                            image={blog.coverImage}
                            author={blog.author}
                            link={{
                                href: '/blogs/[slug]',
                                as: `/blogs/${blog.slug}`
                            }}
                        />
                    </Col>
                )
        ))}
    </>
);

export default BlogList;
