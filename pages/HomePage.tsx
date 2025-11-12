import React from 'react';
import { Link } from 'react-router-dom';
import { dataStore } from '../data/mockData';
import NewsCard from '../components/NewsCard';
import WireframePlaceholder from '../components/WireframePlaceholder';

const HomePage: React.FC = () => {
  const allNews = dataStore.getNews();
  const allProvinces = dataStore.getProvinces();
  const generalNews = allNews.filter(article => !article.provinceId).slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="relative text-black p-12 rounded-lg bg-gray-200 border border-gray-300"
      >
        <WireframePlaceholder className="absolute inset-0" />
        <div className="relative z-10 bg-white/80 p-6 rounded">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <p className="text-lg max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Lorem Ipsum Dolor</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="md:w-1/4 text-center">
            <WireframePlaceholder className="rounded-full w-40 h-40 mx-auto border-4 border-gray-200 shadow-md" />
            <h4 className="font-bold mt-4 text-gray-900">Lorem Ipsum</h4>
            <p className="text-sm text-gray-500">Dolor Sit Amet</p>
          </div>
        </div>
      </section>
      
      {/* Provinces Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Explore Sections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {allProvinces.map(p => (
                <Link to={`/provinces/${p.id}`} key={p.id} className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-500 transition-all">
                    <span className="font-semibold text-gray-700">{p.name}</span>
                </Link>
            ))}
             <Link to="/provinces" className="p-4 bg-gray-100 border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-500 transition-all flex items-center justify-center">
                <span className="font-semibold text-gray-700">View All &raquo;</span>
            </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Lorem Ipsum Dolor Sit Amet</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
