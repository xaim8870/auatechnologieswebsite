// src/pages/Home.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // For career form
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from '../components/ServiceCard';
import { FaCode, FaRobot, FaCogs} from 'react-icons/fa';
import HeroImage from '../assets/images/hero-image.png'; // 🔥 replace with your images



const Home = () => {
  const [] = useState(0);

  useForm(); // Simple form for careers

 



  return (
    <div className="min-h-screen bg-gray-100 text-gray-900transition-colors duration-300">
      {/* Hero Slideshow */}
      <div className="relative h-[calc(100vh-80px)] bg-white flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug text-blue-900 dark:text-white">
              Empowering Businesses with {" "}
             
                Cutting Edge Software & AI
             
            </h1>

            {/* Extra Paragraph */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              We craft scalable, secure, and innovative solutions that help companies
              grow faster, smarter, and more efficiently in today’s digital-first world. We serve humanity with best <span className="text-yellow-600 font-semibold"> Engineering.</span>
            </p>

            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 italic">
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

          {/* Right Hero Image */}
          <div className="hidden lg:flex justify-center bg-white rounded-xl p-6 shadow-lg  hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <img
              src={HeroImage} // Replace with your hero image
              alt="Hero Illustration"
              className="w-full max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </div>
  
      
      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-extrabold text-center mb-4 text-blue-900">
            Our Services
          </h2>
          <p className="text-xl text-center mb-12 text-gray-700 font-light italic max-w-3xl mx-auto">
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


      
      {/* Case Studies / Portfolio */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-2 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-900">
      Epic Wins: Our Game-Changing Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="group bg-white border cursor-pointer border-blue-900 p-6 shadow-md hover:bg-blue-900 transition-all duration-500 rounded-md text-center">
        <div className="text-orange-500 group-hover:text-white text-4xl mb-4">📚</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-white">EdTech Revolution</h3>
        <p className="mb-4 text-gray-700 group-hover:text-gray-200">
          Skyrocketed user engagement by 40% with AI-driven personalized learning paths.
        </p>
        
      </div>

      {/* Card 2 */}
      <div className="group bg-white border cursor-pointer border-blue-900 p-6 shadow-md hover:bg-blue-900 transition-all duration-500 rounded-md text-center">
        <div className="text-orange-500 group-hover:text-white text-4xl mb-4">🏥</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-white">HealthTech Breakthrough</h3>
        <p className="mb-4 text-gray-700 group-hover:text-gray-200">
          Enhanced patient care with secure telemedicine, slashing wait times by 50%.
        </p>
        
      </div>

      {/* Card 3 */}
      <div className="group bg-white border cursor-pointer border-blue-900 p-6 shadow-md hover:bg-blue-900 transition-all duration-500 rounded-md text-center">
        <div className="text-orange-500 group-hover:text-white text-4xl mb-4">🛒</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-white">AI Commerce Booster</h3>
        <p className="mb-4 text-gray-700 group-hover:text-gray-200">
          Doubled conversion rates using custom LLMs for personalized shopping experiences.
        </p>
        
      </div>

      {/* Card 4 */}
      <div className="group bg-white border cursor-pointer border-blue-900 p-6 shadow-md hover:bg-blue-900 transition-all duration-500 rounded-md text-center">
        <div className="text-orange-500 group-hover:text-white text-4xl mb-4">🤖</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-white">AI Assistants</h3>
        <p className="mb-4 text-gray-700 group-hover:text-gray-200">
          Built intelligent chatbots & virtual assistants that streamline customer support.
        </p>
        
      </div>

      {/* Card 5 */}
      <div className="group bg-white border cursor-pointer border-blue-900 p-6 shadow-md hover:bg-blue-900 transition-all duration-500 rounded-md text-center">
        <div className="text-orange-500 group-hover:text-white text-4xl mb-4">💳</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-white">FinTech Growth</h3>
        <p className="mb-4 text-gray-700 group-hover:text-gray-200">
          Delivered secure digital wallets and payment platforms trusted worldwide.
        </p>
        
      </div>

      {/* Card 6 */}
      <div className="group bg-white border cursor-pointer border-blue-900 p-6 shadow-md hover:bg-blue-900 transition-all duration-500 rounded-md text-center">
        <div className="text-orange-500 group-hover:text-white text-4xl mb-4">⚙️</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-white">Custom Integrations</h3>
        <p className="mb-4 text-gray-700 group-hover:text-gray-200">
          Integrated APIs and systems seamlessly to supercharge business workflows.
        </p>
       
      </div>
    </div>
  </div>
</section>


{/* Our Process */}
<section className="py-20 bg-white relative overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900">
      Our Magical Development Journey
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 relative">
      {/* Step 1 */}
      <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl animate-bounce">1</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Discovery & Planning</h3>
        <p className="text-gray-700">We dive deep into your dreams, mapping out a roadmap to success.</p>
      </div>
      {/* Step 2 */}
      <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl animate-bounce delay-150">2</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Design & Development</h3>
        <p className="text-gray-700">Our engineers craft stunning designs and code that bring your vision to life.</p>
      </div>
      {/* Step 3 */}
      <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl animate-bounce delay-300">3</div>
        <h3 className="text-2xl font-bold mb-2 text-blue-900">Testing & Launch</h3>
        <p className="text-gray-700">Rigorous trials ensure perfection before we unleash your project to the world.</p>
      </div>
    </div>
  </div>
</section>

{/* Industries Served */}
<section className="py-20 bg-gray-50 relative">
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900">
      Worlds We Conquer
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {["Healthcare", "Finance", "E-Commerce", "Education"].map((industry, i) => (
        <div
          key={i}
          className="group w-32 h-32 flex items-center justify-center bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-full text-orange-500 text-4xl"
        >
          <span className="group-hover:animate-bounce">
            {industry === "Healthcare" && "🏥"}
            {industry === "Finance" && "💰"}
            {industry === "E-Commerce" && "🛒"}
            {industry === "Education" && "📚"}
          </span>
          <span className="absolute bottom-[-30px] text-sm font-semibold text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {industry}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Resources / Blog */}
<section className="py-20 bg-white relative">
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900">
      Treasure Trove of Knowledge
    </h2>
    <div className="space-y-8">
      {/* Resource 1 */}
      <Link
        to="/resources/ebook1"
        className="block group relative p-6 bg-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-orange-500 text-2xl group-hover:animate-spin">
            📖
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1 text-blue-900 group-hover:text-orange-600 transition-colors duration-300">
              AI in Healthcare Guide
            </h3>
            <p className="text-gray-700">Unlock secrets with our free ebook – your portal to future tech!</p>
          </div>
        </div>
      </Link>

      {/* Resource 2 */}
      <Link
        to="/blog/post1"
        className="block group relative p-6 bg-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-orange-500 text-2xl group-hover:animate-spin">
            📝
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1 text-blue-900 group-hover:text-orange-600 transition-colors duration-300">
              Building Custom LLMs
            </h3>
            <p className="text-gray-700">Dive into our latest blog – sparks of genius await!</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;