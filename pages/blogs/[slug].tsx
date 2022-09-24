import React from 'react';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import type { FC } from 'react';

import type {
    GetStaticProps,
    GetStaticPaths,
} from 'next';

import type { ParsedUrlQuery } from 'querystring';

import moment from 'moment';

import {
    Row,
    Col
} from 'react-bootstrap';

import PageLayout from 'components/PageLayout/PageLayout';
import BlogHeader from 'components/BlogHeader/BlogHeader';
import BlogContent from 'components/BlogContent/BlogContent';
import PreviewAlert from 'components/PreviewAlert/PreviewAlert';
import Preloader from 'components/Preloader/Preloader';

import {
    getBlogBySlug,
    getAllBlogs,
    urlFor
} from 'lib/api';

import type { BlogDataResponseType } from 'lib/types';

interface PageParamsType extends ParsedUrlQuery {
    slug: string;
}

interface BlogDetailPropsType {
    blog: BlogDataResponseType;
    preview: boolean;
}

const BlogDetail: FC<BlogDetailPropsType> = ({
    blog,
    preview
}) => {
    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    if (router.isFallback) {
        return (
            <PageLayout className="blog-detail-page">
                Loading...

                <Preloader />
            </PageLayout>
        );
    }

    return (
        <PageLayout className='blog-detail-page'>
            <Row>
                <Col
                    md={{
                        span: 10,
                        offset: 1,
                    }}
                >
                    <>
                        {preview && <PreviewAlert />}

                        <BlogHeader
                            title={blog.title}
                            subtitle={blog.subtitle}
                            coverImage={
                                blog.coverImage
                                    ? (
                                        urlFor(blog.coverImage)
                                            .height(600)
                                            .crop('center')
                                            .fit('clip')
                                            .url()
                                    )
                                    : ''
                            }
                            author={blog.author}
                            date={moment(blog.date).format('LL')}
                        />

                        <hr />

                        {blog.content && (
                            <BlogContent content={blog.content} />
                        )}
                    </>
                </Col>
            </Row>
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps<
    BlogDetailPropsType,
    PageParamsType
> = async ({
    params,
    preview = false,
}) => {
    const blog = await getBlogBySlug(params?.slug as string, preview);

    return {
        props: {
            blog,
            preview,
        },
        revalidate: 10
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const blogs = await getAllBlogs();

    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug }
    }));

    return {
        paths,
        fallback: true,
    };
};

export default BlogDetail;
