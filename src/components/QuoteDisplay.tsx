
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  }
];

interface QuoteDisplayProps {
  autoRotate?: boolean;
  showNewQuoteButton?: boolean;
  className?: string;
}

const QuoteDisplay = ({
  autoRotate = false,
  showNewQuoteButton = true,
  className = ""
}: QuoteDisplayProps) => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomQuote = (): Quote => {
    const currentIndex = quotes.findIndex(
      quote => quote.text === currentQuote.text
    );
    let newIndex = currentIndex;
    
    // Make sure we get a different quote
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    
    return quotes[newIndex];
  };

  const changeQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(changeQuote, 8000);
      return () => clearInterval(interval);
    }
  }, [autoRotate, currentQuote]);

  return (
    <div className={`quote-card ${className}`}>
      <span className="quote-mark left-4 top-4">"</span>
      <div
        className={`quote-content px-6 transition-opacity duration-500 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="quote-text">{currentQuote.text}</p>
        <span className="quote-author">— {currentQuote.author}</span>
      </div>
      {showNewQuoteButton && (
        <div className="mt-6 text-center">
          <Button 
            onClick={changeQuote} 
            className="bg-quote-accent hover:bg-quote-accent/90 text-white"
          >
            New Quote
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuoteDisplay;
