const nodemailer = require("nodemailer");

console.log("User:", process.env.MAILER_USER);
console.log("Pass:", process.env.MAILER_PASSWORD);


// ✅ Send email using nodemailer
async function sendMail(to, subject, body) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD, // ✅ Updated key
      },
    });

    const sentInfo = await transporter.sendMail({
      from: process.env.MAILER_USER,
      to,
      subject,
      text: body,
    });

    console.log("✅ Email sent:", sentInfo.response);
    return sentInfo;
  } catch (error) {
    console.error("❌ Email not sent:", error);
    throw "OTP send failed, retry after sometime";
  }
}

module.exports = {
  sendMail,
};
