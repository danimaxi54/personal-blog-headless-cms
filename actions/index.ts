import type { Fetcher } from 'swr';

import type { BlogDataResponseType } from 'lib/types';

export const fetcher: Fetcher<BlogDataResponseType[], string> = (
    url
): Promise<BlogDataResponseType[]> =>
    fetch(url).then((res) => res.json());

export const getBlogs = (url: string) => fetcher(url);
