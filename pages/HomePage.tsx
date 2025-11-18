import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES, PROVINCES } from '../data/mockData';
import NewsCard from '../components/NewsCard';

const HomePage: React.FC = () => {
  const generalNews = NEWS_ARTICLES.filter(article => !article.provinceId).slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="relative text-white p-12 rounded-lg shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/sri-lanka-flag/1200/400')` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60 rounded-lg"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Provincial Services Portal of Sri Lanka
          </h1>
          <p className="text-lg max-w-3xl">
            Your official gateway to services, information, and news across all administrative provinces.
          </p>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">A Message from the Ministry</h2>
            <p className="text-slate-700 leading-relaxed">
              Welcome to the unified Provincial Services Portal. This platform is a significant step towards our vision of a digitally empowered nation. We are committed to providing transparent, efficient, and accessible services to every citizen. Through this portal, we aim to bring governance closer to the people, ensuring that you can access the information and services you need with ease and confidence. We encourage you to explore the resources available for your province and engage with us as we continue to enhance this platform.
            </p>
          </div>
          <div className="md:w-1/4 text-center">
            <img 
              src="https://picsum.photos/seed/minister/300/300" 
              alt="Minister's Portrait"
              className="rounded-full w-40 h-40 mx-auto border-4 border-slate-200 shadow-md"
            />
            <h4 className="font-bold mt-4 text-slate-900">Hon. Minister's Name</h4>
            <p className="text-sm text-slate-500">Ministry of Home Affairs</p>
          </div>
        </div>
      </section>
      
      {/* Provinces Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Explore Our Provinces</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {PROVINCES.map(p => (
                <Link to={`/provinces/${p.id}`} key={p.id} className="p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-500 transition-all">
                    <span className="font-semibold text-slate-700">{p.name}</span>
                </Link>
            ))}
             <Link to="/provinces" className="p-4 bg-slate-100 border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-500 transition-all flex items-center justify-center">
                <span className="font-semibold text-blue-700">View All &raquo;</span>
            </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Latest News & Notifications</h2>
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