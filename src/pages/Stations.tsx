
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Station data with correct images
const stationsData = [
  {
    id: "mpeketoni",
    name: "ATDC Mpeketoni",
    region: "Coast",
    specialization: "Coastal Agriculture, Fisheries",
    image: "/lovable-uploads/ad276c5e-d66b-428d-bc21-c665d0afe25c.png"
  },
  {
    id: "mtwapa",
    name: "ATDC Mtwapa",
    region: "Coast",
    specialization: "Coastal agricultural research and development",
    image: "/lovable-uploads/110e6d67-493c-4314-bce6-0d3ad2358ce8.png"
  },
  {
    id: "nakuru",
    name: "ATDC Nakuru",
    region: "Rift Valley",
    specialization: "Agricultural innovation and technology transfer",
    image: "/lovable-uploads/779c56b6-c1af-4e6c-bb82-25559402520c.png"
  },
  {
    id: "bungoma",
    name: "ATDC Bungoma",
    region: "Western",
    specialization: "Western region agriculture and technology development",
    image: "/lovable-uploads/6e0f94ff-4fa7-4701-bc2d-69b0182f64ba.png"
  },
  {
    id: "siakago",
    name: "ATDC Siakago",
    region: "Eastern",
    specialization: "Eastern region agricultural training and development",
    image: "/lovable-uploads/0dec4fcd-07ca-4057-9198-a6e5b1961d49.png"
  },
  {
    id: "bukura",
    name: "ATDC Bukura",
    region: "Western",
    specialization: "Specialized in agricultural mechanization and training",
    image: "/lovable-uploads/25322486-92b7-45ea-837c-4360c9f718fc.png"
  },
  {
    id: "ruiru",
    name: "ATDC Ruiru",
    region: "Central",
    specialization: "Central region agricultural training center",
    image: "/lovable-uploads/237d93b7-93f1-44f9-9c4b-94e1268412a8.png"
  },
  {
    id: "homabay",
    name: "ATDC Homabay",
    region: "Nyanza",
    specialization: "Nyanza region agricultural development and support",
    image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png"
  },
  {
    id: "siaya",
    name: "ATDC Siaya",
    region: "Nyanza",
    specialization: "Focus on sustainable farming and agricultural technologies",
    image: "/lovable-uploads/d0c15681-662b-4837-a17c-4178efc8f433.png"
  },
  {
    id: "katumani",
    name: "ATDC Katumani",
    region: "Eastern",
    specialization: "Specializing in arid and semi-arid land agriculture",
    image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png"
  }
];

// Regions for filtering
const regions = ["All Regions", "Coast", "Central", "Rift Valley", "Western", "Eastern", "North Eastern", "Nyanza"];

const StationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  
  // Filter stations based on search term and selected region
  const filteredStations = stationsData.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         station.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = selectedRegion === "All Regions" || station.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="ATDC Stations"
        description="Explore our network of Agricultural Training and Development Centers across Kenya."
        bgImage="https://images.unsplash.com/photo-1629293394420-1c53fcb20da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Filter and Search Section */}
      <section className="py-12 bg-[#9b87f5]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white shadow-md rounded-xl p-6 -mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search Input */}
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search stations..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-atdc-green/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Region Filter */}
              <div>
                <select 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-atdc-green/50 appearance-none bg-white"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Results Count */}
              <div className="flex items-center justify-center md:justify-end">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-atdc-green">{filteredStations.length}</span> of {stationsData.length} stations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stations Grid */}
      <section className="py-12 bg-[#F2FCE2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStations.length > 0 ? (
              filteredStations.map((station) => (
                <Link 
                  key={station.id}
                  to={`/stations/${station.id}`}
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
                    <div className="inline-block px-3 py-1 text-xs font-semibold bg-atdc-green/10 text-atdc-green rounded-full mb-3">
                      {station.region}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{station.name}</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Specialization:</span> {station.specialization}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-bold mb-2">No stations found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or selecting a different region.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StationsPage;
