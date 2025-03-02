
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StationPreview = () => {
  const stations = [
    {
      name: "Mombasa ATDC",
      image: "https://images.unsplash.com/photo-1561747709-b5d95815ae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specializing in coastal agriculture and fisheries."
    },
    {
      name: "Nairobi ATDC",
      image: "https://images.unsplash.com/photo-1630778699239-4b825d764cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Urban farming and agricultural innovation."
    },
    {
      name: "Kisumu ATDC",
      image: "https://images.unsplash.com/photo-1615424444944-42acce445c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Lake region agriculture and aquaculture."
    }
  ];
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our ATDC Stations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our network of Agricultural Training and Development Centers spread across Kenya, 
            each specializing in region-specific agricultural practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stations.map((station, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{station.name}</h3>
                <p className="text-gray-600 mb-4">{station.description}</p>
                <Link to={`/stations/${station.name.split(' ')[0].toLowerCase()}`} className="text-atdc-green font-medium inline-flex items-center hover:underline">
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-atdc-green hover:bg-atdc-green/90">
            <Link to="/stations">
              View All Stations <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StationPreview;
