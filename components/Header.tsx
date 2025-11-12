import React, { useState, useContext, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { dataStore } from '../data/mockData';
import { AuthContext } from '../contexts/AuthContext';
import WireframePlaceholder from './WireframePlaceholder';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProvincesDropdownOpen, setIsProvincesDropdownOpen] = useState(false);
  const [isDownloadsDropdownOpen, setIsDownloadsDropdownOpen] = useState(false);
  const [hoveredProvince, setHoveredProvince] = useState<number | null>(null);

  const provincesDropdownRef = useRef<HTMLDivElement>(null);
  const downloadsDropdownRef = useRef<HTMLDivElement>(null);
  
  const { isAuthenticated, logout } = useContext(AuthContext);
  const PROVINCES = dataStore.getProvinces();
  const DOWNLOADS = dataStore.getDownloads();

  const activeLinkStyle = {
    color: '#000000',
    fontWeight: 'bold',
    borderBottom: '2px solid #333'
  };

  // Effect to handle clicks outside of the dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (provincesDropdownRef.current && !provincesDropdownRef.current.contains(event.target as Node)) {
        setIsProvincesDropdownOpen(false);
      }
      if (downloadsDropdownRef.current && !downloadsDropdownRef.current.contains(event.target as Node)) {
        setIsDownloadsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-100 sticky top-0 z-50 border-b-2 border-gray-300">
      {/* Top Bar */}
      <div className="bg-gray-200 border-b border-gray-300">
        <div className="container mx-auto px-4 py-1 flex justify-end items-center text-xs text-gray-600">
            <div className="flex items-center">
              {isAuthenticated ? (
                  <>
                    <Link to="/admin/dashboard" className="font-semibold text-gray-700 hover:underline">Admin Dashboard</Link>
                    <span className="mx-2">|</span>
                    <button onClick={logout} className="font-semibold text-gray-700 hover:underline">Logout</button>
                  </>
              ) : (
                <Link to="/admin/login" className="font-semibold hover:underline">Admin Login</Link>
              )}
            </div>
            <span className="mx-2">|</span>
            <span>Language 1</span>
            <span className="mx-2">|</span>
            <span>Language 2</span>
            <span className="mx-2">|</span>
            <span className="font-bold">Language 3</span>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center gap-4">
            <WireframePlaceholder className="h-16 w-12" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Lorem Ipsum Dolor
              </h1>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-700 hover:text-black transition-colors">Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-700 hover:text-black transition-colors">About Us</NavLink>
            <div 
              className="relative"
              ref={provincesDropdownRef}
            >
              <button
                onClick={() => setIsProvincesDropdownOpen(!isProvincesDropdownOpen)}
                className="text-gray-700 hover:text-black transition-colors flex items-center"
              >
                Provinces
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isProvincesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isProvincesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-300">
                  <NavLink to="/provinces" onClick={() => setIsProvincesDropdownOpen(false)} className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">All Provinces</NavLink>
                  <div className="border-t my-1 border-gray-200"></div>
                  {PROVINCES.map(p => (
                    <div 
                      key={p.id}
                      className="relative" 
                      onMouseEnter={() => setHoveredProvince(p.id)} 
                      onMouseLeave={() => setHoveredProvince(null)}
                    >
                      <NavLink to={`/provinces/${p.id}`} onClick={() => setIsProvincesDropdownOpen(false)} className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {p.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </NavLink>
                      {hoveredProvince === p.id && (
                         <div className="absolute left-full -top-1 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-30 border border-gray-300">
                           {p.districts.map(d => (
                              <Link key={d.id} to={`/provinces/${p.id}#district-${d.id}`} onClick={() => setIsProvincesDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{d.name}</Link>
                           ))}
                         </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
             <div className="relative" ref={downloadsDropdownRef}>
              <button
                onClick={() => setIsDownloadsDropdownOpen(!isDownloadsDropdownOpen)}
                className="text-gray-700 hover:text-black transition-colors flex items-center"
              >
                Downloads
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isDownloadsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isDownloadsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-300">
                   {DOWNLOADS.map(form => (
                     <a key={form.id} href={form.url} download className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{form.name}</a>
                   ))}
                </div>
              )}
            </div>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <NavLink to="/" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            <div className="border-t my-1 border-gray-200"></div>
            <h3 className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase">Provinces</h3>
            <NavLink to="/provinces" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded" onClick={() => setIsMenuOpen(false)}>All Provinces</NavLink>
            {PROVINCES.map(p => (
                <NavLink key={p.id} to={`/provinces/${p.id}`} className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded" onClick={() => setIsMenuOpen(false)}>{p.name}</NavLink>
            ))}
            <div className="border-t my-1 border-gray-200"></div>
            <h3 className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase">Downloads</h3>
            {DOWNLOADS.map(form => (
              <a key={form.id} href={form.url} download className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200 rounded">{form.name}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;