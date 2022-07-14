// require('dotenv').config()

// const PASSWORD = process.env.password;
// const EMAIL = process.env.email;

// export default function ContApi (req, res) {

// 	let nodemailer = require('nodemailer')
// 	const transporter = nodemailer.createTransport({
// 		port:465,
// 		host: "smtp.gmail.com",
// 		auth: {
// 			user: EMAIL,
// 			pass: PASSWORD
// 		},
// 		secure: true,
// 	});

// 	const mailData = {
// 		from: 'Chris Wolfe Dev',
// 		to: 'cwdevportemail@gmail.com',
// 		subject: `Message from ${req.body.name}, ${req.body.subject}`,
// 		text: req.body.message,
// 	}

// 	transporter.sendMail(mailData, function (err, info) {
// 		if(err)
// 			console.log(err)
// 		else
// 			console.log(info)
// 	})
	
// 	console.log(req.body)

// 	res.status(200)
// }