import { getSession } from '@auth0/nextjs-auth0';

export default async function me(req, res) {
    try {
        const session = getSession(req, res);
        res.status(200).json(session?.user ?? null);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
    }
}
