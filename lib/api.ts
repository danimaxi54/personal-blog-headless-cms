import imageUrlBuilder from '@sanity/image-url';

import client, {
    previewClient
} from './sanity';

import type {
    BlogDataResponseType,
    BlogsReturnType,
    BlogDataReturnType,
    GetPaginatedBlogs,
} from './types';

const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    'author': author->{name, 'avatar': avatar.asset->url},
    coverImage,
`;

const builder = imageUrlBuilder(client);
const getClient = (preview: boolean) => preview ? previewClient : client;

export function urlFor(source: string): ReturnType<typeof imageUrlBuilder> {
    return builder.image(source);
}

export async function getAllBlogs(): Promise<BlogsReturnType> {
    return await client.fetch(
        `*[_type == "blog"] | order(date desc) {${blogFields}}`
    );
}

export async function getPaginatedBlogs({
    offset = 0,
    date = 'desc'
}: GetPaginatedBlogs = {
    offset: 0,
    date: 'desc'
}): Promise<BlogsReturnType> {
    return await client.fetch(
        `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
            offset + 6
        }]`
    );
}

export async function getBlogBySlug(slug: string, preview: boolean): Promise<BlogDataReturnType> {
    const currentClient = getClient(preview);

    return await currentClient
        .fetch(
            `*[_type == "blog" && slug.current == $slug] {
            ${blogFields}
            content[]{...,"asset": asset->}
        }`,
            { slug }
        )
        .then((res: [BlogDataResponseType, BlogDataResponseType]) =>
            preview ? res[1] : res[0]
        );
}
