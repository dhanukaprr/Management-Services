
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">About Us</h1>
      <div className="space-y-6 text-slate-700">
        <p>
          The District Services Portal was established with the mission to create a transparent, accessible, and efficient digital bridge between the city administration and its residents. We believe in empowering our community by providing easy access to essential services, important announcements, and district-specific information.
        </p>
        <p>
          Our platform consolidates resources for all nine districts, ensuring that no matter where you live, you have the information you need right at your fingertips. From downloading application forms to staying updated with local news, the portal is designed to be your trusted source.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 pt-4">Our Vision</h2>
        <p>
          We envision a fully connected community where technology simplifies civic engagement and enhances the quality of life for every resident. We are continuously working to improve the portal, add new features, and ensure the information provided is accurate and up-to-date.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 pt-4">Contact Us</h2>
        <p>
          For any inquiries or feedback, please feel free to reach out to our support team at <a href="mailto:contact@dsportal.gov" className="text-blue-600 hover:underline">contact@dsportal.gov</a>. We value your input and are here to help.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
