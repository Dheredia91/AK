"use client";

import { useState } from "react";
import Button from "./Button"; 

const FAQ = () => {
  const faqs = [
    {
      question: "How does the asphalt estimate calculator work?",
      answer:
        "The calculator estimates costs based on the square footage or dimensions you provide. It factors in the cost per square foot based on area size and applies an adjustment based on thickness (light, medium, or heavy).",
    },
    {
      question: "How do I determine the square footage of my project?",
      answer:
        "If your project is rectangular, multiply the length by the width. If it’s irregularly shaped, break it into smaller rectangles, calculate their areas, and add them together.",
    },
    {
      question: "How do I determine the correct thickness for my asphalt?",
      answer:
        "Residential driveways usually require 2-3 inches of asphalt. Light-use parking lots typically need 4 inches, while heavy-use lots may require 6-8 inches. A compacted gravel base is recommended for durability.",
    },
    {
      question: "Why is my estimate shown as a price range?",
      answer:
        "The range accounts for potential cost fluctuations due to labor, material prices, and site conditions. The lower end of the estimate is 10% below the base calculation, and the higher end is 10% above it.",
    },
    {
      question: "Can I rely on this estimate for my project budget?",
      answer:
        "This estimate provides a rough cost range. However, factors like soil conditions, prep work, and regional pricing can affect the final cost. Contact us for a detailed, site-specific estimate.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight font-sans text-black sm:text-4xl lg:text-5xl">
            Understanding the Estimate Calculator
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  } transition-transform duration-200`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
