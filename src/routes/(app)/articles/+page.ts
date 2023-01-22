import type { PageLoad } from './$types';
import Api from '$lib/plugins/api';

export const prerender = false;

export const load = (async () => {
	try {
		const dataCategory = await Api.get('/categories');
		dataCategory.unshift({ name: 'All Category', slug: '' })

		const dataArticle = await Api.get('/posts');

		return {
			dataCategory: dataCategory,
			dataArticle: dataArticle
		};
	} catch (error) {
		console.log(error)
	}
}) satisfies PageLoad;