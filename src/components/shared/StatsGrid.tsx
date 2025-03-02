
import { ReactNode } from 'react';
import { Users, Award, Home, BookOpen } from 'lucide-react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  color: string;
}

const StatCard = ({ icon, value, label, color }: StatCardProps) => {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto ${color}`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        icon={<Users size={24} className="text-white" />}
        value="50,000+"
        label="Farmers Trained"
        color="bg-atdc-green"
      />
      <StatCard 
        icon={<Award size={24} className="text-white" />}
        value="200+"
        label="Training Programs"
        color="bg-atdc-brown"
      />
      <StatCard 
        icon={<Home size={24} className="text-white" />}
        value="24"
        label="ATDC Stations"
        color="bg-atdc-blue"
      />
      <StatCard 
        icon={<BookOpen size={24} className="text-white" />}
        value="15+"
        label="Years of Excellence"
        color="bg-atdc-orange"
      />
    </div>
  );
};

export default StatsGrid;
