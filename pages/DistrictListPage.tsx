import React from 'react';
import { Link } from 'react-router-dom';
import { DISTRICTS } from '../data/mockData';

const DistrictListPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">Our Districts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DISTRICTS.map(district => (
          <Link 
            to={`/districts/${district.id}`} 
            key={district.id}
            className="block bg-white rounded-lg shadow-sm overflow-hidden group border border-slate-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img className="w-full h-56 object-cover" src={district.imageUrl} alt={district.name} />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">{district.name}</h2>
              <p className="text-slate-600">{district.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DistrictListPage;