import fetch from "node-fetch";

export async function handler() {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "AUA Technologies <contactus@auatechnologies.com>",
        to: ["contactus@auatechnologies.com"],
        subject: "🚀 Test from Netlify Function",
        html: "<h2>If you see this, your Resend setup is working!</h2>"
      })
    });

    const result = await res.json();
    console.log("Resend result:", result);
    return {
      statusCode: res.status,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error("Error sending:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message })
    };
  }
}
