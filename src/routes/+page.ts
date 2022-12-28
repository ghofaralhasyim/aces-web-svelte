import type { PageLoad } from './$types';

export const prerender = false;

export const load = (async ({ params }) => {
	const res = await fetch('https://aces.umn.ac.id/backend/api/websiteconfiguration');
	const data = await res.json();
	console.log(data);
	return {
		data
	};
}) satisfies PageLoad;
