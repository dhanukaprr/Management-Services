import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About the Portal</h3>
            <p className="text-sm">
              This portal provides access to essential services, news, and information for all provinces, aiming to create a transparent and efficient digital bridge for our citizens.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/provinces" className="hover:text-yellow-400 transition-colors">All Provinces</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Central Administration Office</li>
              <li>Colombo, Sri Lanka</li>
              <li>Email: <a href="mailto:contact@psportal.gov.lk" className="hover:text-yellow-400">contact@psportal.gov.lk</a></li>
              <li>Phone: +94 11 234 5678</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Provincial Services Portal. All Rights Reserved. Maintained by the Central Government of Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;