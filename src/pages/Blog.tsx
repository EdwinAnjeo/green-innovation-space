
import React from 'react';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { successStoriesData } from '@/data/stationsData';

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4 text-center">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Discover how our Agricultural Training Development Centers are making a positive impact across Kenya
              through innovation, training, and technology transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story) => (
              <div 
                key={story.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-atdc-green">{story.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/success-stories/${story.id}`} 
                      className="inline-flex items-center text-[#CC5500] font-medium"
                    >
                      Read full story
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
