import type { PageLoad } from './$types';
import Api from '$lib/plugins/api';

export const prerender = false;

export const load = (async ({params}) => {
	try {
        const dataArticle: any = await Api.get(`/posts/${params.slug}`);
		return {
			dataArticle: dataArticle
		};
	} catch (error) {
		console.log(error)
	}
}) satisfies PageLoad;