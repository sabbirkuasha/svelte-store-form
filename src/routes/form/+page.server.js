/** @type {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';

let contacts = [
	{
		id: '01',
		name: 'Audity',
		email: 'audity@gmail.com',
		job: 'Deshal',
		address: 'somthing, somthing'
	}
];
export const load = () => {
	return {
		contacts
	};
};

// step 1 - creating action so that form data will be avaliable here
export const actions = {
	createForm: async ({ request }) => {
		// check the whole request object
		// console.log(request);

		const formData = await request.formData(); // extracting form data

		const name = formData.get('name');
		const email = formData.get('email');
		const job = formData.get('company');
		const address = formData.get('address');
		// console.log(formData.get('name')); // Extracting specific field from the form data
		// console.log(id);

		// Validation here
		if (name.length < 2) {
			return fail(400, {
				error: true,
				message: 'name must be at least two characters',
				name,
				email,
				job,
				address
			});
		}

		console.log('validation passed');
		const id = crypto.randomUUID();
		const contact = {
			id,
			name,
			email,
			job,
			address
		};
		contacts.push(contact);

		return {
			success: true
		};
	}
};
