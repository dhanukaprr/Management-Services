import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Lorem Ipsum</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gray-100 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-100 transition-colors">About Us</Link></li>
              <li><Link to="/provinces" className="hover:text-gray-100 transition-colors">All Provinces</Link></li>
              <li><a href="#" className="hover:text-gray-100 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Lorem Ipsum Dolor</li>
              <li>Sit Amet, Consectetur</li>
              <li>Email: <a href="mailto:contact@example.com" className="hover:text-gray-100">contact@example.com</a></li>
              <li>Phone: +12 345 678 90</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lorem Ipsum Dolor Sit. All Rights Reserved. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
