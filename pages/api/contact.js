require('dotenv').config()

const PASSWORD = process.env.password

export default function (req, res) {

	let nodemailer = require('nodemailer')
	const transporter = nodemailer.createTransport({
		port:465,
		host: "smtp.gmail.com",
		auth: {
			user: 'cwdevportemail@gmail.com',
			pass: 'vhkjkpovbqbtsaio'
		},
		secure: true,
	});

	const mailData = {
		from: 'Chris Wolfe Dev',
		to: 'cwdevportemail@gmail.com',
		subject: `Message from ${req.body.name}`,
		text: req.body.message,
	}

	transporter.sendMail(mailData, function (err, info) {
		if(err)
			console.log(err)
		else
			console.log(info)
	})
	
	console.log(req.body)

	res.status(200)
}