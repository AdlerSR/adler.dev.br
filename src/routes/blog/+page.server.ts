import { getPosts } from '$lib/server/ghost';

export async function load() {
	return getPosts();
}
