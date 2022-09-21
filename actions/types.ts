import type { SWRInfiniteResponse } from 'swr/infinite/dist/infinite/types';

import type { BlogDataResponseType } from 'lib/types';

export interface UseGetBlogsPagesType {
    filter: {
        asc: boolean;
    };
}

export interface UseGetBlogsPagesReturnType {
    blogs: BlogDataResponseType[] | [];
    hitEnd: boolean;
    size: number;
    setSize: SWRInfiniteResponse['setSize']
    isLoadingMore: boolean;
}
