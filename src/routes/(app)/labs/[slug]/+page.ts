import type { PageLoad } from './$types';
import Api from '$lib/plugins/api';

export const prerender = false;

export const load = (async ({params}) => {
	try {
        const dataArticle: any = await Api.get(`/labs/${params.slug}`);
        const relatedArticle: any = await Api.get(`/labs?labscategories=${dataArticle.labscategory.slug}&per_page=5`);
		return {
            dataArticle: dataArticle,
            relatedArticle: relatedArticle
		};
	} catch (error) {
		console.log(error)
	}
}) satisfies PageLoad;