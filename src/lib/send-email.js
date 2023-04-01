import nodemailer from 'nodemailer';
import sendinblueTransport from 'nodemailer-sendinblue-transport';

const transporter = nodemailer.createTransport(
	new sendinblueTransport({
		apiKey:
			'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'
	})
);

export async function mailPost(request) {
	console.log('from send-email -------------------------------');
	console.log(request);
	const { name, email, message } = request.body;
	let pdf = request.body?.pdf;
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
				path: 'C:/Users/USER/Desktop/temp',
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
