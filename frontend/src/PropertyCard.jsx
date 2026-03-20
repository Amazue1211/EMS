import React from 'react';

const PropertyCard = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Property Image */}
      <img 
        className="w-full h-48 object-cover" 
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=500" 
        alt="Modern House" 
      />
      
      {/* Content Container */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">For Sale</span>
          <span className="text-xl font-bold text-gray-900">$450,000</span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-1">Modern Family Villa</h3>
        <p className="text-gray-600 text-sm mb-4">123 Ocean View Dr, Lagos, Nigeria</p>

        {/* Property Specs */}
        <div className="flex border-t border-gray-100 pt-4 text-gray-500 text-sm">
          <div className="flex items-center mr-4">
            <span className="font-bold text-gray-800 mr-1">3</span> Beds
          </div>
          <div className="flex items-center mr-4">
            <span className="font-bold text-gray-800 mr-1">2</span> Baths
          </div>
          <div className="flex items-center">
            <span className="font-bold text-gray-800 mr-1">1,200</span> sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;