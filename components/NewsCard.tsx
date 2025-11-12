import React from 'react';
import { NewsArticle } from '../types';
import WireframePlaceholder from './WireframePlaceholder';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 h-full flex flex-col">
      <WireframePlaceholder className="w-full h-48" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-2">{new Date(article.date).toLocaleDateString()}</p>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Lorem Ipsum Dolor Sit</h3>
        <p className="text-gray-600 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="text-gray-700 font-semibold mt-4 hover:underline self-start">Read More &raquo;</a>
      </div>
    </div>
  );
};

export default NewsCard;
