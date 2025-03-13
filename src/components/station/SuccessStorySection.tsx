
import React from 'react';
import { Station } from '@/data/stationsData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuccessStorySectionProps {
  station: Station;
}

const SuccessStorySection: React.FC<SuccessStorySectionProps> = ({ station }) => {
  // Only show the first success story if available
  const story = station.successStories.length > 0 ? station.successStories[0] : null;

  if (!story) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-atdc-green mb-4">Priority Value Chain</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our center has made a positive impact in our community.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <h3 className="text-xl font-bold mb-3 text-atdc-green">
                  {story.title}
                </h3>
                <p className="text-gray-600 line-clamp-4 mb-4">
                  {story.story}
                </p>
                <div>
                  <Link to="/success-stories" className="inline-flex items-center text-[#CC5500] font-medium">
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
