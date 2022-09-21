import type { BlogDataResponseType } from 'lib/types';

export interface BlogHeaderPropsType
    extends Omit<BlogDataResponseType, 'slug' | 'content'> {}
