// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // For career form
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from '../components/ServiceCard';
import { FaCode, FaRobot, FaCogs, FaBrain, FaLaptopCode } from 'react-icons/fa';
import slide1 from '../assets/images/slideshow/1.jpg';
import slide2 from '../assets/images/slideshow/2.jpg';
import slide3 from '../assets/images/slideshow/3.jpg';
import slide4 from '../assets/images/slideshow/4.jpg';
import slide5 from '../assets/images/slideshow/5.jpg';
import slide6 from '../assets/images/slideshow/6.jpg';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useForm(); // Simple form for careers

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Slideshow */}
      <div className="relative h-[calc(100vh-80px)] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Hero Content on Left */}
        <div className="absolute inset-0 flex items-center px-8 md:px-16 z-10">
          <div className="max-w-lg space-y-6">
            <h1 className="text-5xl md:text-5xl font-bold text-gray-200 leading-tight drop-shadow-lg">
              Empowering Businesses with Cutting-Edge Software & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 italic drop-shadow-md">
              Let's Code the Future!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4  shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-green transition-all duration-300 font-semibold text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      {/* Company Intro */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 md:space-x-8">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-300 font-mono leading-tight opacity-100 transition-all duration-1000 ease-in-out transform md:translate-x-[-50px] hover:translate-x-0 hover:opacity-100">
              Welcome to AUA Technologies: Your Global Software Partner
            </h1>
            <p className="text-xl max-w-md leading-relaxed text-gray-700 dark:text-gray-300 opacity-100 transition-all duration-1000 ease-in-out transform translate-y-10 hover:translate-y-0 hover:opacity-100 delay-300">
              We deliver exceptional <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-300 font-mono font-bold"> software engineering, </span>AUA LLC combines local oversight with global expertise for flawless execution. We focus on customer-centric solutions in software development, mobile apps, medical health tech, AI, and more—helping businesses thrive with innovative, secure, and scalable technologies.
            </p>
          </div>
        </div>
      </section>

      
      {/* 
      <!>
      <!>
      <!> 
              Services Section 
      <!>
      <!>
      <!>
      */}
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-900 dark:to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTBIMTB2MTBoMTB2LTEwem0wIDQwSDEwdi0xMGgxMHZ0aC0xMHptMjAtMjBIMzB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDEwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHptLTIwIDQwSDMwdi0xMGgxMHZ0aC0xMHptMjAtMjBINTB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDMwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHptLTIwIDQwSDMwdi0xMGgxMHZ0aC0xMHptMjAtMjBINTB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDMwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">
            Unlock Our Powerhouse Services
          </h2>
          <p className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300 font-light italic">
            Dive into a world of tech wizardry crafted to skyrocket your vision into reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaCode className="group-hover:animate-bounce" />}
              title="Web Development"
              description="We craft responsive, high-performance web applications using modern frameworks like React, Vue, and Angular, ensuring seamless user experiences and robust backend integration with Node.js or Django."
            />
            <ServiceCard
              icon={<FaRobot className="group-hover:animate-spin" />}
              title="AI"
              description="Leverage artificial intelligence to automate processes, gain predictive insights, and enhance decision-making with custom AI models tailored to your industry needs."
            />
            <ServiceCard
              icon={<FaCogs className="group-hover:animate-pulse" />}
              title="Dev Ops"
              description="Streamline your development lifecycle with CI/CD pipelines, cloud infrastructure management (AWS, Azure, GCP), and automated testing to ensure reliable, scalable deployments."
            />
            <ServiceCard
              icon={<FaBrain className="group-hover:animate-bounce" />}
              title="Model Training"
              description="Expert training and fine-tuning of machine learning models using datasets and frameworks like TensorFlow and PyTorch, optimizing for accuracy, speed, and real-world deployment."
            />
            <ServiceCard
              icon={<FaLaptopCode className="group-hover:animate-spin" />}
              title="Software Development"
              description="End-to-end custom software solutions, from ideation to maintenance, focusing on scalable architectures, secure coding practices, and integration with existing systems."
            />
          </div>
        </div>
      </section>

      {/* Case Studies / Portfolio */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTBIMTB2MTBoMTB2LTEwem0wIDQwSDEwdi0xMGgxMHZ0aC0xMHptMjAtMjBIMzB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDEwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHptLTIwIDQwSDMwdi0xMGgxMHZ0aC0xMHptMjAtMjBINTB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDMwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHptLTIwIDQwSDMwdi0xMGgxMHZ0aC0xMHptMjAtMjBINTB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDMwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">
            Epic Wins: Our Game-Changing Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-100 dark:bg-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:rotate-1 hover:scale-105 rounded-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">EdTech Revolution</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Skyrocketed user engagement by 40% with AI-driven personalized learning paths.</p>
              <Link to="/portfolio/edtech" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all duration-300">Dive In</Link>
            </div>
            {/* Card 2 */}
            <div className="group bg-gray-100 dark:bg-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-rotate-1 hover:scale-105 rounded-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">HealthTech Breakthrough</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Enhanced patient care with secure telemedicine, slashing wait times by 50%.</p>
              <Link to="/portfolio/health" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all duration-300">Explore Now</Link>
            </div>
            {/* Card 3 - Add a third for variety */}
            <div className="group bg-gray-100 dark:bg-gray-700 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:rotate-1 hover:scale-105 rounded-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">AI Commerce Booster</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Doubled conversion rates using custom LLMs for personalized shopping experiences.</p>
              <Link to="/portfolio/ecommerce" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all duration-300">See the Magic</Link>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </section>

     {/* Our Process */}
<section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTBIMTB2MTBoMTB2LTEwem0wIDQwSDEwdi0xMGgxMHZ0aC0xMHptMjAtMjBIMzB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDEwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHptLTIwIDQwSDMwdi0xMGgxMHZ0aC0xMHptMjAtMjBINTB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDMwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHptLTIwIDQwSDMwdi0xMGgxMHZ0aC0xMHptMjAtMjBINTB2LTEwaDEwdjEwem0tMjAtMjBIMzB2LTEwaDEwdjEwem0wIDQwSDMwdi0xMGgxMHZ0aC0xMHptNDAgMjBINTB2LTEwaDEwdjEwem0wLTIwSDQwdi0xMGgxMHZ0aC0xMHoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">
      Our Magical Development Journey
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 relative">
      {/* Step 1 */}
      <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl animate-bounce">1</div>
        <h3 className="text-2xl font-bold mb-2">Discovery & Planning</h3>
        <p className="text-gray-700 dark:text-gray-300">We dive deep into your dreams, mapping out a enchanted roadmap to success.</p>
      </div>
      <div className="hidden md:block flex-shrink-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 self-center animate-pulse"></div>
      {/* Step 2 */}
      <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500 flex items-center justify-center text-white text-3xl animate-bounce delay-150">2</div>
        <h3 className="text-2xl font-bold mb-2">Design & Development</h3>
        <p className="text-gray-700 dark:text-gray-300">Our wizards craft stunning designs and code spells that bring your vision to life.</p>
      </div>
      <div className="hidden md:block flex-shrink-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 self-center animate-pulse"></div>
      {/* Step 3 */}
      <div className="flex-1 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl animate-bounce delay-300">3</div>
        <h3 className="text-2xl font-bold mb-2">Testing & Launch</h3>
        <p className="text-gray-700 dark:text-gray-300">Rigorous trials ensure perfection before we unleash your project into the world.</p>
      </div>
    </div>
  </div>
</section>

{/* Industries Served */}
<section className="py-20 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-indigo-900 dark:to-gray-900 relative">
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">
      Worlds We Conquer
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {/* Industry 1 */}
      <div className="group w-32 h-32 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:rotate-6 hover:scale-110 rounded-full text-blue-600 dark:text-blue-400 text-4xl">
        <span className="group-hover:animate-bounce">🏥</span>
        <span className="absolute bottom-[-30px] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Healthcare</span>
      </div>
      {/* Industry 2 */}
      <div className="group w-32 h-32 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-rotate-6 hover:scale-110 rounded-full text-blue-600 dark:text-blue-400 text-4xl">
        <span className="group-hover:animate-bounce">💰</span>
        <span className="absolute bottom-[-30px] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Finance</span>
      </div>
      {/* Industry 3 */}
      <div className="group w-32 h-32 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:rotate-6 hover:scale-110 rounded-full text-blue-600 dark:text-blue-400 text-4xl">
        <span className="group-hover:animate-bounce">🛒</span>
        <span className="absolute bottom-[-30px] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">E-Commerce</span>
      </div>
      {/* Industry 4 */}
      <div className="group w-32 h-32 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-rotate-6 hover:scale-110 rounded-full text-blue-600 dark:text-blue-400 text-4xl">
        <span className="group-hover:animate-bounce">📚</span>
        <span className="absolute bottom-[-30px] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Education</span>
      </div>
      {/* Add more industries as bubbles */}
    </div>
  </div>
</section>

{/* Resources / Blog */}
<section className="py-20 bg-white dark:bg-gray-800 relative">
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">
      Treasure Trove of Knowledge
    </h2>
    <div className="space-y-8">
      {/* Resource 1 */}
      <Link to="/resources/ebook1" className="block group relative p-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl group-hover:animate-spin">
            📖
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">AI in Healthcare Guide</h3>
            <p className="text-gray-700 dark:text-gray-300">Unlock secrets with our free ebook – your portal to future tech!</p>
          </div>
        </div>
      </Link>
      {/* Resource 2 */}
      <Link to="/blog/post1" className="block group relative p-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl group-hover:animate-spin">
            📝
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Building Custom LLMs</h3>
            <p className="text-gray-700 dark:text-gray-300">Dive into our latest blog – sparks of genius await!</p>
          </div>
        </div>
      </Link>
      {/* Add more resources */}
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;