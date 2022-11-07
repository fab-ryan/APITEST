import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = (to, subject) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: to,
    html: subject,
    subject: 'Sign up',
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent',data);
    }
  });
};
