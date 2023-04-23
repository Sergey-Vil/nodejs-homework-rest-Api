const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "vilchinskyi.serhii@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

// const data = {
//   to: "xoxig94538@hrisland.com",
//   subject: "Verify email",
//   html: <p>Click verify emai</p>,
// };

const sendEmail = async (data) => {
  const email = { ...data, from: "vilchinskyi.serhii@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;

// const email = {
//   to: "xoxig94538@hrisland.com",
//   from: "vilchinskyi.serhii@meta.ua",
//   subject: "Verify email",
//   html: <p>Click verify emai</p>,
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
