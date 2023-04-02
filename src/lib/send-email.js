import nodemailer from 'nodemailer';
import sendinblueTransport from 'nodemailer-sendinblue-transport';

const transporter = nodemailer.createTransport(
	new sendinblueTransport({
		apiKey: '<YOUR-API_KEY>'
	})
);

export async function mailPost(request) {
	console.log('from send-email -------------------------------');
	console.log(request);
	const { name, email, message, pdf } = request.body;
	// let pdf = request.body?.pdf;
	console.log('Consoling pdf ==============');
	console.log(pdf);
	// console.log(name);
	// console.log(email);
	// console.log(message);

	const mailOptions = {
		from: 'Purbani <purbanigroupweb@gmail.com>',
		to: 'purbanigroupweb@gmail.com',
		subject: `New message from ${name} (${email})`,
		html: '<p>This is a test email</p>',
		text: message,
		attachments: [
			{
				filename: 'chess.pdf',
				content: pdf.buffer,
				// path: 'C:/Users/USER/Desktop/temp',
				contentType: 'application/pdf'
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
