
import React from 'react';
import { Station } from '@/data/stationsData';

interface StaffSectionProps {
  station: Station;
}

const StaffSection: React.FC<StaffSectionProps> = ({ station }) => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-atdc-green mb-4">Staff Establishment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our center employs qualified professionals dedicated to supporting agricultural development.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {station.staff.breakdown.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-3xl font-bold text-atdc-green mb-2">{item.count}</p>
              <p className="text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
