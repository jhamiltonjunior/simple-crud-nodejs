const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
} = process.env;

export default {
  MAIL_HOST,
  MAIL_PORT,
  auth: {
    MAIL_USER,
    MAIL_PASS,
  },
};

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "a048d5f3c2b176",
//     pass: "4e96429ff328be"
//   }
// });
