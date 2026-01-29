import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

type EmailParams = {
	to: string;
	subject: string;
	text: string;
};

export async function sendEmail({ to, subject, text }: EmailParams) {
	const mailgunDomain = process.env.MAILGUN_DOMAIN!;
	const mailgunApiKey = process.env.MAILGUN_API_KEY!;

	const mailgun = new Mailgun(FormData);
	const mg = mailgun.client({
		username: "api",
		key: mailgunApiKey,
	});

	const messageData = {
		from: `Bicheka Simple Auth <noreply@${mailgunDomain}>`,
		to,
		subject,
		text,
	};

	try {
		const data = await mg.messages.create(mailgunDomain, messageData);

		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
