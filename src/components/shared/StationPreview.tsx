
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const StationPreview = () => {
  const allStations = [
    {
      name: "ATDC Mpeketoni",
      image: "/lovable-uploads/ad276c5e-d66b-428d-bc21-c665d0afe25c.png",
      description: "Specializing in coastal agriculture and fisheries."
    },
    {
      name: "ATDC Mtwapa",
      image: "/lovable-uploads/110e6d67-493c-4314-bce6-0d3ad2358ce8.png",
      description: "Coastal agricultural research and development."
    },
    {
      name: "ATDC Nakuru",
      image: "/lovable-uploads/779c56b6-c1af-4e6c-bb82-25559402520c.png",
      description: "Agricultural innovation and technology transfer."
    },
    {
      name: "ATDC Bungoma",
      image: "/lovable-uploads/6e0f94ff-4fa7-4701-bc2d-69b0182f64ba.png",
      description: "Western region agriculture and technology development."
    },
    {
      name: "ATDC Siakago",
      image: "/lovable-uploads/0dec4fcd-07ca-4057-9198-a6e5b1961d49.png",
      description: "Eastern region agricultural training and development."
    },
    {
      name: "ATDC Bukura",
      image: "/lovable-uploads/25322486-92b7-45ea-837c-4360c9f718fc.png",
      description: "Specialized in agricultural mechanization and training."
    },
    {
      name: "ATDC Ruiru",
      image: "/lovable-uploads/237d93b7-93f1-44f9-9c4b-94e1268412a8.png",
      description: "Central region agricultural training center."
    },
    {
      name: "ATDC Homabay",
      image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png",
      description: "Nyanza region agricultural development and support."
    },
    {
      name: "ATDC Siaya",
      image: "/lovable-uploads/d0c15681-662b-4837-a17c-4178efc8f433.png",
      description: "Focus on sustainable farming and agricultural technologies."
    },
    {
      name: "ATDC Katumani",
      image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png",
      description: "Specializing in arid and semi-arid land agriculture."
    }
  ];
  
  // Display only 5 stations on the homepage
  const previewStations = allStations.slice(0, 5);
  
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
        
        <Separator className="mb-8 bg-gray-300" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {previewStations.map((station, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover-scale h-full flex flex-col"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold mb-2">{station.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{station.description}</p>
              </div>
              <div className="p-4 pt-0">
                <Link 
                  to={`/stations/${station.name.split(' ')[1].toLowerCase()}`} 
                  className="text-atdc-green font-medium inline-flex items-center hover:underline"
                >
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
