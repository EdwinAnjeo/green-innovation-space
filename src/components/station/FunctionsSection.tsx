
import React from 'react';
import { Station } from '@/data/stationsData';
import { CheckCircle2 } from 'lucide-react';

interface FunctionsSectionProps {
  station: Station;
}

const FunctionsSection: React.FC<FunctionsSectionProps> = ({ station }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-atdc-green mb-4">Our Functions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide various services to support agricultural development in our region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {station.functions.map((func, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <CheckCircle2 className="text-atdc-green" />
                </div>
                <p className="text-gray-600">{func}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsSection;
