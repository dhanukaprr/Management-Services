import React from 'react';
import { Link } from 'react-router-dom';
import { dataStore } from '../data/mockData';
import WireframePlaceholder from '../components/WireframePlaceholder';

const ProvinceListPage: React.FC = () => {
  const provinces = dataStore.getProvinces();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Provinces</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {provinces.map(province => (
          <Link 
            to={`/provinces/${province.id}`} 
            key={province.id}
            className="block bg-white rounded-lg shadow-sm overflow-hidden group border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <WireframePlaceholder className="w-full h-56" />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{province.name}</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProvinceListPage;
