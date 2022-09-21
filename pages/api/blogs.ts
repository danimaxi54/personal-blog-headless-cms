import type {
    NextApiRequest,
    NextApiResponse
} from 'next';

import { getPaginatedBlogs } from 'lib/api';

import type { BlogDataResponseType } from 'lib/types';

export default async function getBlogs(
    req: NextApiRequest,
    res: NextApiResponse<BlogDataResponseType[]>
) {
    const offset = parseInt(
        (req.query.offset as string | undefined) || '0',
        10
    );
    const date = req.query.date as string || 'desc';

    const data = await getPaginatedBlogs({ offset, date });

    res.status(200).json(data);
}
