
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">QuoteHaven</h3>
            <p className="text-gray-500 text-sm">
              Discover, collect, and share your favorite quotes from around the world.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 text-sm hover:text-primary">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-500 text-sm hover:text-primary">Pricing</Link></li>
              <li><Link to="/account" className="text-gray-500 text-sm hover:text-primary">My Account</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-primary">Support</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} QuoteHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
