import React from 'react';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200 h-full flex flex-col">
      <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-slate-500 mb-2">{new Date(article.date).toLocaleDateString()}</p>
        <h3 className="text-xl font-semibold mb-3 text-slate-900">{article.title}</h3>
        <p className="text-slate-600 flex-grow">{article.content}</p>
        <a href="#" className="text-blue-700 font-semibold mt-4 hover:underline self-start">Read More &raquo;</a>
      </div>
    </div>
  );
};

export default NewsCard;