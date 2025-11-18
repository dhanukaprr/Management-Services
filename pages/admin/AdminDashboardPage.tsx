import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { dataStore } from '../../data/mockData';
import { NewsArticle, ApplicationForm } from '../../types';

const AdminDashboardPage: React.FC = () => {
  const { logout } = useContext(AuthContext);

  // Component state that syncs with our in-memory dataStore
  const [news, setNews] = useState<NewsArticle[]>(dataStore.getNews());
  const [downloads, setDownloads] = useState<ApplicationForm[]>(dataStore.getDownloads());
  
  const allProvinces = dataStore.getProvinces();

  // State for the "Add News" form
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsImageUrl, setNewsImageUrl] = useState('');
  const [newsProvinceId, setNewsProvinceId] = useState<string>('');
  
  // State for the "Add Download" form
  const [downloadName, setDownloadName] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsContent) return;
    
    dataStore.addNews({
        title: newsTitle,
        content: newsContent,
        date: new Date().toISOString().split('T')[0],
        imageUrl: newsImageUrl || `https://picsum.photos/seed/${Math.random()}/400/300`,
        provinceId: newsProvinceId ? parseInt(newsProvinceId) : undefined,
    });
    
    setNews([...dataStore.getNews()]);
    setNewsTitle('');
    setNewsContent('');
    setNewsImageUrl('');
    setNewsProvinceId('');
  };

  const handleDeleteNews = (id: number) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
        dataStore.deleteNews(id);
        setNews([...dataStore.getNews()]);
    }
  };
  
  const handleAddDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if(!downloadName || !downloadUrl) return;

    dataStore.addDownload({ name: downloadName, url: downloadUrl });
    setDownloads([...dataStore.getDownloads()]);
    setDownloadName('');
    setDownloadUrl('');
  };

  const handleDeleteDownload = (id: number) => {
    if(window.confirm('Are you sure you want to delete this download?')) {
        dataStore.deleteDownload(id);
        setDownloads([...dataStore.getDownloads()]);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
                <button
                    onClick={logout}
                    className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                    Logout
                </button>
            </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <p className="text-sm text-slate-600 bg-yellow-100 border border-yellow-300 rounded-md p-4 mb-8">
            <strong>Note:</strong> This is a demonstration admin panel. All changes are stored in-memory and will be lost upon reloading the browser tab.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Manage News Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold mb-4">Manage Notices</h2>
                <form onSubmit={handleAddNews} className="space-y-4 mb-6 pb-6 border-b">
                    <input type="text" placeholder="Title" value={newsTitle} onChange={e => setNewsTitle(e.target.value)} className="w-full p-2 border rounded" required />
                    <textarea placeholder="Content" value={newsContent} onChange={e => setNewsContent(e.target.value)} className="w-full p-2 border rounded" required />
                    <input type="url" placeholder="Image URL (optional)" value={newsImageUrl} onChange={e => setNewsImageUrl(e.target.value)} className="w-full p-2 border rounded" />
                    <select value={newsProvinceId} onChange={e => setNewsProvinceId(e.target.value)} className="w-full p-2 border rounded">
                        <option value="">General (Nationwide)</option>
                        {allProvinces.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                    <button type="submit" className="w-full py-2 px-4 text-white bg-blue-700 rounded-md font-bold hover:bg-blue-800">Add Notice</button>
                </form>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                    {news.map(article => (
                        <div key={article.id} className="flex justify-between items-center p-3 bg-slate-50 rounded">
                            <span>{article.title}</span>
                            <button onClick={() => handleDeleteNews(article.id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Manage Downloads Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-bold mb-4">Manage Downloads</h2>
                <form onSubmit={handleAddDownload} className="space-y-4 mb-6 pb-6 border-b">
                    <input type="text" placeholder="Form Name" value={downloadName} onChange={e => setDownloadName(e.target.value)} className="w-full p-2 border rounded" required />
                    <input type="url" placeholder="Download URL" value={downloadUrl} onChange={e => setDownloadUrl(e.target.value)} className="w-full p-2 border rounded" required />
                    <button type="submit" className="w-full py-2 px-4 text-white bg-blue-700 rounded-md font-bold hover:bg-blue-800">Add Download</button>
                </form>
                 <div className="space-y-3 max-h-96 overflow-y-auto">
                    {downloads.map(form => (
                        <div key={form.id} className="flex justify-between items-center p-3 bg-slate-50 rounded">
                            <span>{form.name}</span>
                            <button onClick={() => handleDeleteDownload(form.id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
