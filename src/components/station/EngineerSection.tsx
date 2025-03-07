
import React from 'react';
import { Station } from '@/data/stationsData';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EngineerSectionProps {
  station: Station;
}

const EngineerSection: React.FC<EngineerSectionProps> = ({ station }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-atdc-green">Center Engineer</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <img 
                src={station.engineer.photo} 
                alt={station.engineer.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center h-full">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <h3 className="text-xl font-bold mb-1">{station.engineer.name}</h3>
              <p className="text-atdc-green font-medium mb-4">Center Engineer</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Engineer's Bio</h4>
                <p className="text-gray-600">{station.engineer.bio}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Engineer's Remarks</h4>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-atdc-green">
                  <div className="flex gap-3">
                    <Quote className="text-atdc-green flex-shrink-0" />
                    <p className="text-gray-600 italic">{station.engineer.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-atdc-green hover:bg-atdc-green/90 text-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EngineerSection;
