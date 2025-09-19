// src/pages/Blogs.tsx
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "How I Built a Brain Tumor Detection Model",
    excerpt:
      "Exploring YOLOv12 with Swin Transformer for medical imaging — lessons learned and results.",
    date: "Feb 2025",
    tag: "AI/ML",
    image: "/images/blogs/brain-tumor-blog.jpg",
    slug: "/blogs/brain-tumor",
  },
  {
    title: "My Journey Learning React Native in 30 Days",
    excerpt:
      "From setup to building my first cross-platform app — here’s what I learned.",
    date: "Jan 2025",
    tag: "Frontend",
    image: "/images/blogs/react-native.jpg",
    slug: "/blogs/react-native-journey",
  },
  {
    title: "Creating a Blog Writing Chatbot with RAG",
    excerpt:
      "How I built a chatbot that generates blogs using LangChain and Hugging Face datasets.",
    date: "Dec 2024",
    tag: "AI/Chatbots",
    image: "/images/blogs/chatbot.jpg",
    slug: "/blogs/rag-chatbot",
  },
];

const Blogs = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Blogs & Articles
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Insights, tutorials, and stories from my journey in software
          development and AI/ML.
        </p>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden text-left"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <span className="text-xs uppercase text-blue-600 dark:text-blue-400 font-medium">
                  {blog.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                  <Link
                    to={blog.slug}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
