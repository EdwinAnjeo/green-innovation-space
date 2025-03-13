
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
          <h2 className="text-3xl font-bold text-atdc-green mb-4">Priority Value Chain</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our center has made a positive impact in our community.
          </p>
        </div>
        
        {station.successStories.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {station.successStories.slice(0, 1).map((story, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                  <div className="md:flex md:flex-col h-full">
                    <div className="md:h-48">
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-atdc-green">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-4">
                        {story.story}
                      </p>
                      <div className="mt-4">
                        <Link to="/success-stories" className="inline-flex items-center text-[#CC5500] font-medium">
                          Read more
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {station.successStories.length > 1 && (
              <div className="text-center mt-8">
                <Link 
                  to="/success-stories" 
                  className="inline-flex items-center text-atdc-green font-medium hover:text-atdc-green/80"
                >
                  View all priority value chains
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStorySection;
