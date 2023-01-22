import type { PageLoad } from './$types';
import Api from '$lib/plugins/api';

export const prerender = false;

export const load = (async () => {
	try {
		const dataLabs = await Api.get('/labs?per_page=2');
		const dataConfig = await Api.get('/websiteconfiguration');

		return {
			dataConfig: dataConfig,
			dataLabs: dataLabs
		};

	} catch (error) {
		console.log(error)
	}
}) satisfies PageLoad;
