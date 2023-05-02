import { getPost } from '../../../../lib/server/ghost';

export async function load({ params }: { params: { slug: string } }) {
	try {
		return getPost({ slug: params.slug });
	} catch (error) {
		console.log(error);
	}
}
