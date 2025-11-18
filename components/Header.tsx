import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PROVINCES } from '../data/mockData';

const SriLankaEmblem: React.FC<{className: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 L10 20 V60 L50 100 L90 60 V20 Z" fill="#FFD700" />
        <g transform="translate(50 55) scale(0.4)">
            <path d="M0-95.1a4.9 4.9 0 014.9 4.9v16.3a4.9 4.9 0 01-9.8 0v-16.3a4.9 4.9 0 014.9-4.9z" fill="#800000"/>
            <path d="M-40.6 63.3a4.9 4.9 0 010-9.8h81.2a4.9 4.9 0 010 9.8zM-23-45.7a4.9 4.9 0 013.5-1.4h39.1a4.9 4.9 0 013.5 8.3l-19.5 19.6a4.9 4.9 0 01-7 0L-19.4-37.4a4.9 4.9 0 01-3.5-8.3z" fill="#800000"/>
            <path d="M-19.4-37.4a4.9 4.9 0 01-3.5-8.3L1.1-80a4.9 4.9 0 017 0l24 24.2a4.9 4.9 0 01-3.5 8.3zM1.1-80a4.9 4.9 0 013.5-1.4h39.1a4.9 4.9 0 013.5 8.3l-19.5 19.6a4.9 4.9 0 01-7 0L4.6-53.4a4.9 4.9 0 01-3.5-8.3z" fill="#800000"/>
            <path d="M40.6-53.4a4.9 4.9 0 01-7 0L14.1-72.9a4.9 4.9 0 010-7l19.5-19.6a4.9 4.9 0 017 0l-19.5 19.5a4.9 4.9 0 010 7zM-19.4-37.4a4.9 4.9 0 01-3.5-8.3L1.1-80a4.9 4.9 0 017 0L-15.9-56.1a4.9 4.9 0 01-3.5 1.4z" fill="#800000"/>
            <path d="M-40.6 53.4a4.9 4.9 0 010-9.8h81.2a4.9 4.9 0 010 9.8z" fill="#0055A4"/>
            <circle cx="0" cy="0" r="40" fill="#FFD700"/>
            <path d="M0-30a4.9 4.9 0 014.9 4.9v50.2a4.9 4.9 0 01-9.8 0V-25a4.9 4.9 0 014.9-4.9z" fill="#800000"/>
            <path d="M-20-10a4.9 4.9 0 010-9.8h40a4.9 4.9 0 010 9.8z" fill="#800000"/>
        </g>
    </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProvincesDropdownOpen, setIsProvincesDropdownOpen] = useState(false);
  const [isDownloadsDropdownOpen, setIsDownloadsDropdownOpen] = useState(false);
  const [hoveredProvince, setHoveredProvince] = useState<number | null>(null);

  const activeLinkStyle = {
    color: '#800000', // Maroon
    fontWeight: 'bold',
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-yellow-400">
      {/* Top Bar */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 py-1 flex justify-end items-center text-xs text-slate-600">
            <span>සිංහල</span>
            <span className="mx-2">|</span>
            <span>தமிழ்</span>
            <span className="mx-2">|</span>
            <span className="font-bold">English</span>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center gap-4">
            <SriLankaEmblem className="h-16 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-blue-800">
                Provincial Services Portal
              </h1>
              <p className="text-sm text-slate-500">පළාත් සේවා ද්වාරය | மாகாண சேவைகள் நுழைவாயில்</p>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-slate-700 hover:text-blue-800 transition-colors">Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-slate-700 hover:text-blue-800 transition-colors">About Us</NavLink>
            <div className="relative" onMouseLeave={() => setIsProvincesDropdownOpen(false)}>
              <button
                onMouseEnter={() => setIsProvincesDropdownOpen(true)}
                className="text-slate-700 hover:text-blue-800 transition-colors flex items-center"
              >
                Provinces
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isProvincesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isProvincesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 border">
                  <NavLink to="/provinces" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">All Provinces</NavLink>
                  <div className="border-t my-1"></div>
                  {PROVINCES.map(p => (
                    <div 
                      key={p.id}
                      className="relative" 
                      onMouseEnter={() => setHoveredProvince(p.id)} 
                      onMouseLeave={() => setHoveredProvince(null)}
                    >
                      <NavLink to={`/provinces/${p.id}`} className="flex justify-between items-center w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                        {p.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </NavLink>
                      {hoveredProvince === p.id && (
                         <div className="absolute left-full -top-1 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-30 border">
                           {p.districts.map(d => (
                              <Link key={d.id} to={`/provinces/${p.id}#district-${d.id}`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">{d.name}</Link>
                           ))}
                         </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
             <div className="relative">
              <button
                onClick={() => setIsDownloadsDropdownOpen(!isDownloadsDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDownloadsDropdownOpen(false), 200)}
                className="text-slate-700 hover:text-blue-800 transition-colors flex items-center"
              >
                Downloads
                <svg className={`w-4 h-4 ml-1 transform transition-transform ${isDownloadsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isDownloadsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 border">
                   <a href="/forms/membership-form.pdf" download className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Membership Form</a>
                   <a href="/forms/loan-application-form.pdf" download className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Loan Application Form</a>
                </div>
              )}
            </div>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <NavLink to="/" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            <div className="border-t my-1"></div>
            <h3 className="px-4 pt-2 pb-1 text-xs font-semibold text-slate-400 uppercase">Provinces</h3>
            <NavLink to="/provinces" className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded" onClick={() => setIsMenuOpen(false)}>All Provinces</NavLink>
            {PROVINCES.map(p => (
                <NavLink key={p.id} to={`/provinces/${p.id}`} className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded" onClick={() => setIsMenuOpen(false)}>{p.name}</NavLink>
            ))}
            <div className="border-t my-1"></div>
            <h3 className="px-4 pt-2 pb-1 text-xs font-semibold text-slate-400 uppercase">Downloads</h3>
            <a href="/forms/membership-form.pdf" download className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded">Membership Form</a>
            <a href="/forms/loan-application-form.pdf" download className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 rounded">Loan Application Form</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;