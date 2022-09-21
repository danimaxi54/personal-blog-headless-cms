import useSWRInfinite from 'swr/infinite';

import type { BlogDataResponseType } from 'lib/types';

import { getBlogs } from 'actions';

import {
    FilterByDateEnum,
    BLOGS_LIMIT_PER_QUERY
} from './constants';

import type {
    UseGetBlogsPagesType,
    UseGetBlogsPagesReturnType
} from './types';

export const useGetBlogsPages = ({
    filter,
 }: UseGetBlogsPagesType): UseGetBlogsPagesReturnType => {
    const {
        data,
        error,
        size,
        setSize,
        isValidating
    } = useSWRInfinite(
        (
            index,
            previousPageData: BlogDataResponseType[]
        ) => {
            if (index === 0) {
                return `/api/blogs?date=${
                    filter.asc 
                        ? FilterByDateEnum.ASC 
                        : FilterByDateEnum.DESC
                }`;
            }

            if (!previousPageData.length) {
                return null;
            }

            return `/api/blogs?offset=${index * BLOGS_LIMIT_PER_QUERY}&date=${
                filter.asc
                    ? FilterByDateEnum.ASC
                    : FilterByDateEnum.DESC
            }`;
        },
        getBlogs,
    );

    const isLoadingInitialData = !data && !error;
    const blogs: BlogDataResponseType[] | [] = data
        ? ([] as BlogDataResponseType[]).concat(...data)
        : [];
    const isLoadingMore = isLoadingInitialData || (
        isValidating && size > 1 && data && typeof data[size - 1] === 'undefined'
    ) as boolean;
    let hitEnd = false;

    if (data) {
        hitEnd = data[data.length - 1].length === 0;
    }

    return {
        size,
        setSize,
        blogs,
        hitEnd,
        isLoadingMore
    };
};
