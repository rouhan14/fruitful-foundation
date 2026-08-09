import React from "react";
import Reveal from "./Reveal";

// Placeholder events until real event photos and details are provided.
const events = [1, 2, 3];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-3 text-center">
            Events
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A look at the campaigns and events Fruitful Foundation has run for the communities we
            serve.
          </p>
        </Reveal>

        <div className="space-y-6">
          {events.map((id, index) => (
            <Reveal key={id} delay={index * 0.05}>
              <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="sm:w-64 w-full h-48 sm:h-auto flex-shrink-0 border-r border-gray-100">
                  <img
                    src="/events/placeholder.png"
                    alt="Event placeholder"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center p-6 sm:p-8 text-center sm:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Event Placeholder
                  </h2>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
