import { PRIVATE_CONTENT_API_KEY } from '$env/static/private';
import GhostContentAPI from '@tryghost/content-api';

const ghostClient = new GhostContentAPI({
	url: 'http://143.198.167.76', // This is the default URL if your site is running on a local environment
	key: PRIVATE_CONTENT_API_KEY,
	version: 'v5.0'
});

export const getPosts = async () => {
	const posts = await ghostClient.posts
		.browse({
			limit: 'all'
		})
		.catch((err: Error) => {
			console.error(err);
		});

	return { posts };
};

export const getPost = async ({ slug }: { slug: string }) => {
	const post = await ghostClient.posts.read({ slug });

	return { post: post };
};
