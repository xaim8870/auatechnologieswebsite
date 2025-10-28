// src/components/ClientReviews.tsx
import { Quote } from "lucide-react";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Sophia Turner",
      role: "CTO, HealthSync AI",
      feedback:
        "AUA Technologies elevated our AI product from concept to production with flawless execution. Their professionalism, transparency, and speed set a new benchmark for our tech partnerships.",
    },
    {
      name: "James Wong",
      role: "Founder, Finex Labs",
      feedback:
        "Working with AUA Technologies was like having an extended in-house engineering team. They built and deployed our cloud infrastructure with precision and scalability in mind.",
    },
    {
      name: "Amna Malik",
      role: "Product Manager, EduCore",
      feedback:
        "Their blend of innovation and technical excellence helped us launch an education platform that scaled to thousands of users effortlessly. Truly a world-class experience.",
    },
  ];

  return (
    <section className="py-20 bg-none text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          We partner with startups, enterprises, and visionaries around the world — 
          delivering impactful digital products that drive growth, performance, and innovation.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 shadow-sm hover:shadow-lg transition-all duration-300 text-left"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-orange-600 w-8 h-8 opacity-20" />
              
              {/* Review Text */}
              <p className="italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                “{review.feedback}”
              </p>

              {/* Divider Line */}
              <div className="w-20 h-[2px] bg-gradient-to-r from-orange-600 to-blue-700 mb-4"></div>

              {/* Reviewer Info */}
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-white text-lg">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
