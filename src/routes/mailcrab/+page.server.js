import { mailPost } from '../../lib/send-email';
export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		// console.log(formData.get('pdf'));

		const name = formData.name; // Replace with actual name input value
		const email = 'purbanigroupweb@gmail.com'; // Replace with actual email input value
		const message = formData.description; // Replace with actual message input value
		const pdf = formData.pdf;
		console.log('from server js --------------------');
		console.log(pdf);
		await mailPost({
			body: {
				name,
				email,
				message,
				pdf
			}
		});

		console.log('End server js --------------------');
		console.log(formData);
	}
};
