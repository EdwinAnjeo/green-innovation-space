
import React from 'react';
import { Station } from '@/data/stationsData';
import { Phone, Mail, Users } from 'lucide-react';

interface ContactInfoSectionProps {
  station: Station;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ station }) => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-atdc-green shadow-lg rounded-xl p-6 md:p-8 -mt-12 md:-mt-16 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full mr-4">
              <Mail size={24} className="text-[#CC5500]" />
            </div>
            <div>
              <p className="text-sm text-white/80">Email</p>
              <a href={`mailto:${station.email}`} className="text-lg font-medium text-white hover:text-white/80 transition-colors">
                {station.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full mr-4">
              <Phone size={24} className="text-[#CC5500]" />
            </div>
            <div>
              <p className="text-sm text-white/80">Phone</p>
              <a href={`tel:${station.phone}`} className="text-lg font-medium text-white hover:text-white/80 transition-colors">
                {station.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full mr-4">
              <Users size={24} className="text-[#CC5500]" />
            </div>
            <div>
              <p className="text-sm text-white/80">Staff</p>
              <p className="text-lg font-medium text-white">{station.staff.total} Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
