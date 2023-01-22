import type { PageLoad } from './$types';
import Api from '$lib/plugins/api';

export const prerender = false;

export const load = (async () => {
	try {
		const dataCategory = await Api.get('/labs-categories');
        dataCategory.unshift({ name: 'All Category', slug: '' })

        const dataLabs = await Api.get('/labs');

		return {
			dataCategory: dataCategory,
			dataLabs: dataLabs
		};
	} catch (error) {
		console.log(error)
	}
}) satisfies PageLoad;