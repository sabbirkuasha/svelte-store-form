/** @type {import('./$types').Actions} */

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
	default: async ({ request }) => {
		// check the whole request object
		// console.log(request);

		const formData = await request.formData(); // extracting form data

		console.log(formData);

		console.log(formData.get('name')); // Extracting specific field from the form data
	}
};
