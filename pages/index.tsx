import React, {
    useCallback,
    useState,
} from 'react';

import type {
    NextPage,
    GetStaticProps
} from 'next';

import {
    Row,
    Button
} from 'react-bootstrap';

import InfiniteScroll from 'react-infinite-scroll-component';

import PageLayout from 'components/PageLayout/PageLayout';
import AuthorIntro from 'components/AuthorIntro/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu/FilteringMenu';
import BlogList from 'components/BlogList/BlogList';
import PreviewAlert from 'components/PreviewAlert/PreviewAlert';
import Preloader from 'components/Preloader/Preloader';
import ButtonUp from 'components/ButtonUp/ButtonUp';

import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'actions/pagination';
import { useTheme } from 'providers/ThemeProvider';

import { INITIAL_BLOGS_QUANTITY } from 'actions/constants';

import type { BlogDataResponseType } from 'lib/types';

interface HomePropsType {
    blogs: BlogDataResponseType[];
    preview: boolean;
}

interface FilterStateType {
    view: {
        list: boolean;
    };
    date: {
        asc: boolean;
    };
}

const Home: NextPage<HomePropsType> = ({
    blogs: initialBlogsData,
    preview
}) => {
    const [filter, setFilter] = useState<FilterStateType>({
        view: { list: false },
        date: { asc: false }
    });

    const { theme } = useTheme();

    const {
        blogs,
        size,
        setSize,
        hitEnd,
        isLoadingMore
    } = useGetBlogsPages({ filter: filter.date });

    const handleChangeFilter = useCallback(
        (
            option: string,
            value: { list: boolean } | { asc: boolean }
        ) => {
            setFilter((prevState) => ({
                ...prevState,
                [option]: value
            }));
        },
        []
    );

    return (
        <PageLayout>
            {preview && <PreviewAlert />}

            <AuthorIntro />

            <hr />

            <FilteringMenu
                view={filter.view}
                sortingType={filter.date}
                onChange={handleChangeFilter}
            />

            <InfiniteScroll
                next={() => setSize(size + 1)}
                hasMore={blogs.length > INITIAL_BLOGS_QUANTITY && !hitEnd}
                dataLength={blogs.length}
                loader={null}
            >
                <Row className='mb-5'>
                    <BlogList
                        blogs={blogs.length ? blogs : initialBlogsData}
                        view={filter.view}
                    />
                </Row>
            </InfiniteScroll>

            {blogs.length === INITIAL_BLOGS_QUANTITY && !hitEnd && (
                <div className='centered'>
                    <Button
                        variant={theme === 'dark'
                            ? 'outline-light'
                            : 'outline-secondary'
                        }
                        onClick={() => setSize(size + 1)}
                        disabled={hitEnd}
                    >
                        {isLoadingMore
                            ? 'Loading...'
                            : 'Load more...'
                        }
                    </Button>
                </div>
            )}

            {size > 1 && isLoadingMore && !hitEnd && <Preloader />}

            <ButtonUp />
        </PageLayout>
    );
};

export const getStaticProps: GetStaticProps<HomePropsType> = async ({ preview= false }) => {
    const blogs = await getPaginatedBlogs({
        offset: 0,
        date: 'desc'
    });

    return {
        props: {
            blogs,
            preview
        },
        revalidate: 10
    };
};

export default Home;
