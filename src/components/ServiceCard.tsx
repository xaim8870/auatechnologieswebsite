// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white p-6 border-solid shadow-lg  hover:scale-105  overflow-hidden">
      {/* Creative Overlay Gradient on Hover */}
      <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Icon with Pulse Animation */}
      <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400 text-5xl relative z-10 group-hover:animate-pulse">
        {icon}
      </div>
      {/* Title with Underline Effect */}
      <h3 className="text-2xl font-bold mb-4 text-center text-blue-900 dark:text-gray-100 relative ">
        {title}
      </h3>
      {/* Description with Fade-In Lines */}      <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed relative z-10">
        {description}
      </p>
      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default ServiceCard;