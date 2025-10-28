// src/pages/Home.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../components/ServiceCard";
import ClientReviews from "../components/ClientReviews";
import { FaCode, FaRobot, FaCogs } from "react-icons/fa";
import {
  Brain,
  Smartphone,
  School,
  Bot,
  Cpu,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/hero-image.png";

const Home = () => {
  const [] = useState(0);
  useForm();

  // 🟣 Project data
  const projects = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "ZeamHealth EEG Mobile Application",
      desc: "AI-powered mobile platform integrating Neurosity Crown & Muse S headbands for real-time EEG-based insights.",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Brain Tumor Detection with CustomYolo",
      desc: "Developed a custom detection & segmentation model for brain tumors using YOLOv12 and Swin Transformer backbone.",
    },
    {
      icon: <School className="w-10 h-10" />,
      title: "Student Management Software",
      desc: "A complete offline academic management solution built in C++ with a user-friendly interface and data efficiency.",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Chatbots (First Aid & Health Assistant)",
      desc: "Built smart domain-specific assistants using RAG pipelines and Hugging Face datasets for real-time support.",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "AI Agents & Automation Tools",
      desc: "Developed intelligent agents to automate workflows, improve scheduling, and optimize business intelligence.",
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "System Integrations & APIs",
      desc: "Connected cloud services, databases, and backend APIs seamlessly to power scalable and efficient ecosystems.",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* 🟠 HERO SECTION */}
      <div className="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-blue-900 dark:text-white">
            Empowering Businesses with{" "}
            Cutting Edge Software & AI
          </h1>

          <p className="text-base md:text-lg  text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            We craft scalable, secure, and innovative solutions that help
            companies grow faster, smarter, and more efficiently in today’s
            digital-first world. We serve humanity with best{" "}
            <span className="text-yellow-500 font-semibold">Engineering.</span>
          </p>

          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 italic">
            Let's <span className="text-yellow-500">Code the Future</span> Together 🚀
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src={HeroImage}
            alt="Hero Illustration"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>

      {/* 🟣 SERVICES SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300 font-light italic max-w-3xl mx-auto">
            Engineering consulting service with clients in USA, UK and Gulf.
            We offer three main services:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-blue-900">
            <ServiceCard
              icon={<FaCode className="group-hover:animate-bounce text-orange-400" />}
              title="Custom Development"
              description="Got a project in mind? We'll build it for you with scalable, high-performance solutions tailored to your needs."
            />
            <ServiceCard
              icon={<FaRobot className="group-hover:animate-spin text-orange-500" />}
              title="Rent a CTO"
              description="We help you establish the best technical architecture for your project and provide ongoing guidance to get the job done."
            />
            <ServiceCard
              icon={<FaCogs className="group-hover:animate-pulse text-orange-600" />}
              title="Rent an Engineer"
              description="Need extra hands? We work alongside your existing technical team to accelerate delivery and innovation."
            />
          </div>
        </div>
      </section>
      {/* 🟢 CLIENT REVIEWS */}
      <ClientReviews />   
      {/* 🔵 OUR WORK SECTION */}
<section className="py-20 bg-none transition-colors duration-500 border-t border-gray-200 dark:border-gray-800">
  <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-blue-900 dark:text-white">
      Our Work
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 p-10 h-[350px] flex flex-col justify-between text-left"
        >
          {/* Icon + Title */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-5 bg-blue-50 dark:bg-blue-900/30 group-hover:bg-orange-600 transition-all duration-500">
                <span className="text-orange-600 group-hover:text-white text-4xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 dark:text-white">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Accent Line */}
          <div className="w-full h-[3px] bg-gradient-to-r from-orange-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* 🟠 OUR PROCESS */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900 dark:text-white">
            Our Magical Development Journey
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {[
              { step: 1, title: "Discovery & Planning", desc: "We dive deep into your dreams, mapping out a roadmap to success." },
              { step: 2, title: "Design & Development", desc: "Our engineers craft stunning designs and code that bring your vision to life." },
              { step: 3, title: "Testing & Launch", desc: "Rigorous trials ensure perfection before we unleash your project to the world." },
            ].map((s, i) => (
              <div key={i} className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl animate-bounce">
                  {s.step}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-blue-900 dark:text-white">{s.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
