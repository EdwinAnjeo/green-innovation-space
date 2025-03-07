
import React from 'react';
import { Station } from '@/data/stationsData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuccessStorySectionProps {
  station: Station;
}

const SuccessStorySection: React.FC<SuccessStorySectionProps> = ({ station }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-atdc-green mb-4">Success Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our center has made a positive impact in our community.
          </p>
        </div>
        
        {station.successStories.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={station.successStories[0].image} 
                    alt={station.successStories[0].title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold mb-3 text-atdc-green">
                    {station.successStories[0].title}
                  </h3>
                  <p className="text-gray-600">
                    {station.successStories[0].story}
                  </p>
                  <div className="mt-4">
                    <Link to="/success-stories" className="inline-flex items-center text-atdc-green font-medium">
                      Read more success stories
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStorySection;
