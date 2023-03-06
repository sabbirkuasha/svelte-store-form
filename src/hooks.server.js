import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/phone')) {
		// 	return new Response('custom response');
		// event.locals.something = 'Hello world';
		throw redirect(303, '/');
	}

	const response = await resolve(event);
	return response;
}
