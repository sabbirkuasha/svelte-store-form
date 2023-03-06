/** @type {import('./$types').PageLoad} */
import { redirect } from '@sveltejs/kit';

export async function load({ fetch, request, url, locals }) {
	let pageNum = url.searchParams.get('page');
	console.log(pageNum);

	let categoryData;
	if (pageNum && !isNaN(pageNum)) {
		const category = await fetch('https://app.deshal.org/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				phone: '01717066722'
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
		categoryData = await category.json();
	} else {
		categoryData = 'Is not valid phone number';
	}

	return {
		categoryData
	};
}
