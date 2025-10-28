// src/pages/Contact.tsx
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Rocket,
  PenTool,
  Calendar,
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const onSubmit = async (data: any) => {
    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMsg("✅ Message sent successfully! We'll get back to you soon.");
        reset();
      } else {
        setResponseMsg("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      setResponseMsg("⚠️ Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 🟦 Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Let’s Talk Business 🤝
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you’re an entrepreneur, freelancer, or business owner — tell us
            about your goals and we’ll help you craft the perfect digital solution
            with strategy, design, and technology that scale.
          </p>
        </div>

        {/* 🧩 Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg border border-gray-200 px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl"
        >
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2 text-blue-900">
              Full Name
            </label>
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <User className="w-5 h-5 text-orange-600" />
              <input
                {...register("name")}
                type="text"
                placeholder="Your full name"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2 text-blue-900">
              Email Address
            </label>
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <Mail className="w-5 h-5 text-orange-600" />
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2 text-blue-900">
              Phone Number
            </label>
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <Phone className="w-5 h-5 text-orange-600" />
              <input
                {...register("phone")}
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label className="block font-semibold mb-2 text-blue-900">
              What service do you need?
            </label>
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <Briefcase className="w-5 h-5 text-orange-600" />
              <select
                {...register("service")}
                className="w-full bg-transparent outline-none appearance-none focus:outline-none"
                required
              >
                <option value="">Select a service</option>
                <option>Website or App Development</option>
                <option>AI / Machine Learning Project</option>
                <option>UI / UX Design</option>
                <option>Product Consultation</option>
                <option>DevOps & Cloud Setup</option>
                <option>Something Custom</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block font-semibold mb-2 text-blue-900">
              Estimated Budget (USD)
            </label>
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <Rocket className="w-5 h-5 text-orange-600" />
              <select
                {...register("budget")}
                className="w-full bg-transparent outline-none appearance-none focus:outline-none"
              >
                <option value="">Select range</option>
                <option>$500 - $2,000</option>
                <option>$2,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block font-semibold mb-2 text-blue-900">
              Preferred Timeline
            </label>
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <Calendar className="w-5 h-5 text-orange-600" />
              <select
                {...register("timeline")}
                className="w-full bg-transparent outline-none appearance-none focus:outline-none"
              >
                <option>As soon as possible</option>
                <option>1 - 3 months</option>
                <option>3 - 6 months</option>
                <option>6+ months</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2 text-blue-900">
              Tell us about your project
            </label>
            <div className="flex items-start gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <PenTool className="w-5 h-5 text-orange-600 mt-2" />
              <textarea
                {...register("description")}
                rows={5}
                placeholder="Describe your goals, problems to solve, or ideas you’d like to explore..."
                className="w-full bg-transparent outline-none resize-none"
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2 text-blue-900">
              Additional Details or Questions
            </label>
            <div className="flex items-start gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <MessageSquare className="w-5 h-5 text-orange-600 mt-2" />
              <textarea
                {...register("notes")}
                rows={3}
                placeholder="Anything else we should know?"
                className="w-full bg-transparent outline-none resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              {loading ? "Sending..." : <>
                <Send className="w-5 h-5" /> Submit Inquiry
              </>}
            </button>

            {/* Response Message */}
            {responseMsg && (
              <p className="mt-4 text-center text-sm text-gray-700">{responseMsg}</p>
            )}
          </div>
        </form>

        {/* 🟧 Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            We’ll get back to you within <strong>24–48 hours</strong>.  
            Let’s build something extraordinary together 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
