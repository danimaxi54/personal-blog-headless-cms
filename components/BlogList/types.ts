import type { BlogDataResponseType } from 'lib/types';

export interface BlogListPropsType {
    view: {
        list: boolean;
    };
    blogs: BlogDataResponseType[] | [];
}
