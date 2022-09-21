import type { BlogDataType } from 'lib/types';

export interface CardListItemPropsType extends Omit<BlogDataType, 'slug' | 'image'> {
    link?: {
        href: string;
        as: string;
    };
}
