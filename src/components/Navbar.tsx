
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold text-quote-dark">
            Quote<span className="text-quote-accent">Haven</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/account" className="nav-link hidden md:inline-block">
            My Account
          </Link>
          <Link to="/account">
            <Button className="btn-primary">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
