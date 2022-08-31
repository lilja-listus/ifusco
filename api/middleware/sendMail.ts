import { Actions } from "../types/Actions";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const emailContent = (nameFirst: string) => ({
  [Actions.NEW_USER]: {
    subject: "New user confirmation",
    text: `Congtats, ${nameFirst},  Now you are registered to ifusco website. 
    you will be updated about the confa now. Don't forget to register to the conference itself (here: #)

    You can get more info soon.
`,
  },
  [Actions.NEW_PARTICIPANT]: {
    subject: "IFUSCO 2023  Registration confirmation",
    text: `Congtats, ${nameFirst},  You've been registered 
    Поздравляем , ${nameFirst}, ты зарегестрирован на конференцию Ифуско 2023`,
  },
});

export const sendConfirmationEmail = (
  email: string,
  nameFirst: string,
  action: Actions
) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: emailContent(nameFirst)[action].subject,
    text: emailContent(nameFirst)[action].text,
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
