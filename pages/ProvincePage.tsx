import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dataStore } from '../data/mockData';
import NewsCard from '../components/NewsCard';
import { Province } from '../types';
import WireframePlaceholder from '../components/WireframePlaceholder';

const DownloadIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const ProvincePage: React.FC = () => {
  const { provinceId } = useParams<{ provinceId: string }>();

  const province: Province | undefined = dataStore.getProvinces().find(p => p.id === parseInt(provinceId || ''));
  const provinceNews = dataStore.getNews().filter(article => article.provinceId === province?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [provinceId]);

  if (!province) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Content Not Found</h1>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur.</p>
        <Link to="/provinces" className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-gray-200">
          <WireframePlaceholder className="w-full h-full"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-extrabold text-white">{province.name}</h1>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About the {province.name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Districts within {province.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {province.districts.map(district => (
                <div key={district.id} id={`district-${district.id}`} className="p-4 bg-gray-50 border rounded-md text-center">
                    <span className="font-medium text-gray-800">{district.name}</span>
                </div>
            ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Application Forms</h2>
            <ul className="space-y-4">
                {province.forms.map(form => (
                    <li key={form.id}>
                        <a href={form.url} download className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 hover:border-gray-500 transition-colors">
                            <span className="font-medium text-gray-700">{form.name}</span>
                            <DownloadIcon className="h-6 w-6 text-gray-600" />
                        </a>
                    </li>
                ))}
            </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Loan Application</h2>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
            <button className="w-full bg-gray-400 text-white font-bold py-3 px-6 rounded-lg cursor-not-allowed">
                System Coming Soon
            </button>
        </section>
      </div>

      {provinceNews.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{province.name} News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provinceNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProvincePage;
