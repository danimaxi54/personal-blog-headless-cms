import type { BlogDataType } from 'lib/types';

export interface CardItemPropsType extends Omit<BlogDataType, 'slug'> {
    link?: {
        href: string;
        as: string;
    };
}
