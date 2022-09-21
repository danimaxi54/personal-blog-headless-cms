import type { BlogDataResponseType } from 'lib/types';

export interface BlogContentPropsType {
    content: BlogDataResponseType['content'];
}

export interface SerializersType {
    types: {
        code: ({ node }: SerializersCodeDataPropsType) => JSX.Element;
        image: ({ node }: SerializersImageDataPropsType) => JSX.Element;
    };
}

export interface SerializersCodeDataPropsType {
    node: {
        language: string;
        code: string;
        filename: string;
    };
}

export interface SerializersImageDataPropsType {
    node: {
        asset: {
            url: string;
        };
        alt: string;
        position: 'left' | 'right' | 'center';
    };
}
