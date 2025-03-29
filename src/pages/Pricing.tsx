
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({
  name,
  price,
  description,
  features,
  recommended = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        recommended
          ? "border-primary shadow-lg scale-105"
          : "border-gray-200"
      } bg-white`}
    >
      {recommended && (
        <div className="bg-primary text-primary-foreground text-center py-2">
          <span className="text-sm font-medium">Recommended</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-gray-500 mb-6">{description}</p>
        <Button
          className={`w-full ${
            recommended 
              ? "bg-primary hover:bg-primary/90" 
              : "bg-gray-800 hover:bg-gray-700"
          } text-white`}
        >
          Get Started
        </Button>
      </div>
      <div className="border-t p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-quote-dark mb-6 animate-fade-in">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Find the perfect plan for your inspirational journey. All plans include access to our
              ever-growing collection of quotes.
            </p>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingTier
              name="Basic"
              price="Free"
              description="Perfect for casual browsers"
              features={[
                "Access to 1,000+ quotes",
                "Daily quote notification",
                "Basic search functionality",
                "Bookmark up to 10 quotes"
              ]}
            />
            
            <PricingTier
              name="Premium"
              price="$4.99"
              description="Ideal for quote enthusiasts"
              features={[
                "Everything in Basic",
                "Unlimited access to all quotes",
                "Advanced filtering options",
                "Create custom collections",
                "No advertisements",
                "Download quotes as images"
              ]}
              recommended={true}
            />
            
            <PricingTier
              name="Professional"
              price="$9.99"
              description="For content creators & writers"
              features={[
                "Everything in Premium",
                "API access",
                "Author biographies",
                "Historical context for quotes",
                "Commercial usage rights",
                "Priority support"
              ]}
            />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Is there a free trial available?</h3>
                <p className="text-gray-600">We offer a 14-day free trial for both Premium and Professional plans. No credit card required to start.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg mb-2">How often are new quotes added?</h3>
                <p className="text-gray-600">We add new quotes weekly, ensuring our collection stays fresh and inspiring.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and Apple Pay for subscription payments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
