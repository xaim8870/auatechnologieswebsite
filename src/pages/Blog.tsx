// src/pages/Blogs.tsx
import { Link } from "react-router-dom";
import { Brain, Bot, Code2, Cloud, ShieldCheck, Cpu } from "lucide-react";

const blogs = [
  {
    icon: <Brain className="w-6 h-6 text-orange-600" />,
    title: "Building Brain Tumor Detection with YOLOv12 + Swin Transformer",
    excerpt:
      "How deep learning architectures like YOLOv12 and Swin Transformer are changing the landscape of medical imaging and diagnostics.",
    date: "Feb 2025",
    tag: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800&auto=format&fit=crop", // ✅ Example image
    slug: "/blogs/brain-tumor-detection",
  },
  {
    icon: <Bot className="w-6 h-6 text-orange-600" />,
    title: "Creating a Chatbot using RAG and LangChain",
    excerpt:
      "A practical guide to building intelligent chatbots with Retrieval-Augmented Generation (RAG) and LangChain pipelines.",
    date: "Jan 2025",
    tag: "AI/Chatbots",
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
    slug: "/blogs/rag-chatbot-guide",
  },
  {
    icon: <Code2 className="w-6 h-6 text-orange-600" />,
    title: "React Native for Beginners: Build Your First App in 30 Days",
    excerpt:
      "From setup to deployment — everything you need to know to get started with React Native and build your own mobile app.",
    date: "Dec 2024",
    tag: "Frontend",
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
    slug: "/blogs/react-native-journey",
  },
  {
    icon: <Cloud className="w-6 h-6 text-orange-600" />,
    title: "Deploying AI Models on the Cloud (AWS, GCP, Hugging Face)",
    excerpt:
      "Step-by-step approach to deploying your machine learning models in production using cloud services effectively.",
    date: "Nov 2024",
    tag: "DevOps / AI",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    slug: "/blogs/ai-model-deployment",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    title: "Securing Your Applications: Best Practices for Developers",
    excerpt:
      "Essential tips on authentication, encryption, and secure API design to keep your applications safe and reliable.",
    date: "Oct 2024",
    tag: "Security",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=800&auto=format&fit=crop",
    slug: "/blogs/app-security-best-practices",
  },
  {
    icon: <Cpu className="w-6 h-6 text-orange-600" />,
    title: "How AI Agents Will Transform the Future of Work",
    excerpt:
      "An insight into the future of automation with intelligent AI agents — and how they’ll reshape productivity and creativity.",
    date: "Sep 2024",
    tag: "AI/Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "/blogs/ai-agents-future",
  },
];

const Blogs = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-none text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* 🟦 Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4">
            Tech Insights & Engineering Blogs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical tutorials, real-world insights, and case studies to help
            developers, engineers, and innovators stay ahead in AI, software,
            and technology.
          </p>
        </div>

        {/* 🧩 Blog Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 hover:border-orange-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 font-semibold">
                  {blog.tag}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {blog.icon}
                  <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{blog.date}</span>
                  <Link
                    to={blog.slug}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
            Want to Share Knowledge or Collaborate?
          </h2>
          <Link
            to="/contact"
            className="px-8 py-3 text-lg font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
