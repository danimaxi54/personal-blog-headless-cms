import type {
    NextApiRequest,
    NextApiResponse
} from 'next';

import { getBlogBySlug } from 'lib/api';

export default async function enablePreview(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({
            message: 'Invalid token' }
        );
    }

    const blog = await getBlogBySlug(req.query.slug as string, true);

    if (!blog) {
        return res.status(401).json({
            message: 'Invalid slug' }
        );
    }

    res.setPreviewData({});
    res.writeHead(307, {
        Location: `/blogs/${blog.slug}`
    });
    res.end();
}
