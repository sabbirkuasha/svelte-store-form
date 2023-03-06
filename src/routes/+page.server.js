// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals) {
		// console.log('locals found');
		console.log(locals);
		return locals;
	}
	// throw error(404, 'Not found');
}
