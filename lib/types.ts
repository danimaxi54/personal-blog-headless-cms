export interface BlogDataResponseType {
    title: string;
    subtitle: string;
    slug: string;
    date: string;
    coverImage?: string;
    author: {
        name: string;
        avatar: string;
    };
    content?: unknown;
}

export interface BlogDataType
    extends Omit<BlogDataResponseType, 'coverImage' | 'content'> {
    image?: string;
}

export type BlogDataReturnType = BlogDataResponseType;
export type BlogsReturnType = BlogDataReturnType[];

export interface GetPaginatedBlogs {
    offset: number;
    date: string;
}
