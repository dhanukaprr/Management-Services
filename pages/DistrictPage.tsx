import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DISTRICTS, NEWS_ARTICLES } from '../data/mockData';
import NewsCard from '../components/NewsCard';
import { District } from '../types';

const DownloadIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


const DistrictPage: React.FC = () => {
  const { districtId } = useParams<{ districtId: string }>();
  const navigate = useNavigate();

  const district: District | undefined = DISTRICTS.find(d => d.id === parseInt(districtId || ''));
  const districtNews = NEWS_ARTICLES.filter(article => article.districtId === district?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [districtId]);

  if (!district) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">District Not Found</h1>
        <p className="text-slate-600 mb-8">The district you are looking for does not exist.</p>
        <Link to="/districts" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
          Back to Districts List
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg border border-slate-200">
          <img src={district.imageUrl} alt={district.name} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-extrabold text-white">{district.name}</h1>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">About {district.name}</h2>
        <p className="text-lg text-slate-700 leading-relaxed">{district.longDescription}</p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Application Forms</h2>
            <ul className="space-y-4">
                {district.forms.map(form => (
                    <li key={form.id}>
                        <a href={form.url} download className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 hover:border-blue-500 transition-colors">
                            <span className="font-medium text-slate-700">{form.name}</span>
                            <DownloadIcon className="h-6 w-6 text-blue-600" />
                        </a>
                    </li>
                ))}
            </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Loan Application</h2>
            <p className="text-slate-600 mb-6">Online loan application services will be available soon. Please check back later for updates.</p>
            <button className="w-full bg-slate-400 text-white font-bold py-3 px-6 rounded-lg cursor-not-allowed">
                System Coming Soon
            </button>
        </section>
      </div>

      {districtNews.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">{district.name} News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districtNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DistrictPage;