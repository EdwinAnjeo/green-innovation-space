
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
        icon={<Home size={24} className="text-white" />}
        value="10"
        label="Stations across the country to cover all the 47 counties in Kenya"
        color="bg-atdc-green"
      />
      <StatCard 
        icon={<Award size={24} className="text-white" />}
        value="30+"
        label="Established technologies per year across different value chains in the country"
        color="bg-atdc-brown"
      />
      <StatCard 
        icon={<BookOpen size={24} className="text-white" />}
        value="76"
        label="Projects Managed by ATDC Engineers in different counties annually"
        color="bg-atdc-blue"
      />
      <StatCard 
        icon={<Users size={24} className="text-white" />}
        value="55"
        label="Professional Engineers, Food Scientists & Technicians at each Station"
        color="bg-atdc-orange"
      />
    </div>
  );
};

export default StatsGrid;
