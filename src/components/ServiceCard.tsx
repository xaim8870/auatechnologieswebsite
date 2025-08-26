// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-lg overflow-hidden">
      {/* Creative Overlay Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Icon with Pulse Animation */}
      <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400 text-5xl relative z-10 group-hover:animate-pulse">
        {icon}
      </div>
      {/* Title with Underline Effect */}
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
        {title}
      </h3>
      {/* Description with Fade-In Lines */}
      <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed relative z-10">
        {description}
      </p>
      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default ServiceCard;