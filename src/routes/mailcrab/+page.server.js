// import { mailPost } from '../../lib/send-email';
import nodemailer from 'nodemailer';
import sendinblueTransport from 'nodemailer-sendinblue-transport';
const transporter = nodemailer.createTransport(
	new sendinblueTransport({
		apiKey: '<YOUR-API_KEY>'
	})
);

export const actions = {
	default: async (event) => {
		const values = await event.request.formData();
		const pdf = values.get('pdf');
		const formData = Object.fromEntries(values);
		// console.log(pdf);

		const name = formData.name; // Replace with actual name input value
		const email = 'purbanigroupweb@gmail.com'; // Replace with actual email input value
		const message = formData.description; // Replace with actual message input value
		// const pdf = formData.pdf;
		console.log('from server js --------------------');
		// console.log(pdf);

		var arrayBuffer = await pdf.arrayBuffer();
		var buffer = Buffer.from(arrayBuffer);
		// console.log(buffer);
		const mailOptions = {
			from: 'Purbani <purbanigroupweb@gmail.com>',
			to: 'naufel26@gmail.com',
			subject: `New message from ${name} (${email})`,
			html: '<p>This is a test email</p>',
			text: message,
			attachments: [
				{
					filename: pdf.name,
					content: buffer,
					// path: 'C:/Users/USER/Desktop/temp',
					contentType: pdf.type
				}
			]
		};

		try {
			await transporter.sendMail(mailOptions);
			return {
				status: 200,
				body: 'Email sent successfully'
			};
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				body: 'Failed to send email'
			};
		}
	}
};
