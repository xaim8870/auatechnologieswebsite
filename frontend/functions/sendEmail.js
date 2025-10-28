import nodemailer from "nodemailer";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    // 📨 Configure Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "usamajabar.2@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // Use app password here
      },
    });

    // 🧠 Construct email
    const mailOptions = {
      from: `"AUA Technologies Contact Form" <usamajabar.2@gmail.com>`,
      to: "usamajabar.2@gmail.com",
      subject: `📩 New Inquiry from ${data.name}`,
      text: `
New message received from AUA Technologies Contact Form

────────────────────────────
👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone || "N/A"}
💼 Service: ${data.service}
💰 Budget: ${data.budget || "Not specified"}
⏱️ Timeline: ${data.timeline || "Not specified"}

🧠 Project Description:
${data.description}

💬 Additional Notes:
${data.notes || "None"}
────────────────────────────

End of message.
      `,
    };

    // 📤 Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("❌ Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: error.message }),
    };
  }
}
