
import React from "react";
import QuoteDisplay from "@/components/QuoteDisplay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-quote-dark mb-6 animate-fade-in">
              Discover <span className="text-primary">Inspiring</span> Quotes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in">
              Find wisdom, inspiration, and motivation from the world's greatest thinkers,
              all in one beautiful place.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in">
              <Button className="btn-primary text-lg py-6 px-8">
                Get Started
              </Button>
              <Link to="/pricing">
                <Button variant="outline" className="text-lg py-6 px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto animate-fade-in">
              <QuoteDisplay autoRotate={true} />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-container">
          <h2 className="section-title text-center">Why Choose QuoteHaven</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Daily Inspiration</h3>
              <p className="text-gray-600">
                Get a fresh dose of motivation every day with our curated collection of quotes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Collections</h3>
              <p className="text-gray-600">
                Save your favorite quotes and organize them into personal collections.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Sharing</h3>
              <p className="text-gray-600">
                Share quotes you love with friends and family on social media.
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get inspired?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who find daily inspiration on QuoteHaven.
              Start your journey today!
            </p>
            <Link to="/pricing">
              <Button className="btn-primary text-lg px-8 py-3">
                Choose Your Plan
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
