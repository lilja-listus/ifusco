const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export const sendConfirmationEmail = (email: string, nameFirst: string) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "IFUSCO 2023  Registration confirmation",
    text: `Congtats, ${nameFirst},  You've been registered 
    Поздравляем , ${nameFirst}, ты зарегестрирован на конференцию Ифуско 2023`,
  };

  transporter.sendMail(
    options,
    function (err: any, info: { response: string }) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("sent" + info.response);
    }
  );
};
