// netlify/functions/sendEmail.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AUA Technologies <contactus@auatechnologies.com>",
        to: ["contactus@auatechnologies.com"],
        subject: `📩 New Inquiry from ${data.name}`,
        html: `
          <h2>New Message Received from AUA Technologies</h2>
          <p><b>Name:</b> ${data.name}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Phone:</b> ${data.phone || "N/A"}</p>
          <p><b>Service:</b> ${data.service}</p>
          <p><b>Budget:</b> ${data.budget || "Not specified"}</p>
          <p><b>Timeline:</b> ${data.timeline || "Not specified"}</p>
          <p><b>Description:</b> ${data.description}</p>
          <p><b>Notes:</b> ${data.notes || "None"}</p>
        `,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
      };
    } else {
      console.error("❌ Resend error:", result);
      return {
        statusCode: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ success: false, message: result.error || "Failed to send email" }),
      };
    }
  } catch (error) {
    console.error("❌ Function error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ success: false, message: error.message }),
    };
  }
}
