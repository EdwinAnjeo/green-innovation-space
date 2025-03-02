
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Station data
const stationsData = [
  {
    id: "mombasa",
    name: "Mombasa ATDC",
    region: "Coast",
    specialization: "Coastal Agriculture, Fisheries",
    image: "https://images.unsplash.com/photo-1580392734071-3b9cf323cf4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "kilifi",
    name: "Kilifi ATDC",
    region: "Coast",
    specialization: "Horticulture, Cashew Farming",
    image: "https://images.unsplash.com/photo-1595853035070-59a39f319289?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "taita-taveta",
    name: "Taita Taveta ATDC",
    region: "Coast",
    specialization: "Highland Crops, Conservation Agriculture",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "nairobi",
    name: "Nairobi ATDC",
    region: "Central",
    specialization: "Urban Farming, Agricultural Innovation",
    image: "https://images.unsplash.com/photo-1598515212648-8eff74c323a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "kiambu",
    name: "Kiambu ATDC",
    region: "Central",
    specialization: "Dairy Farming, Coffee Production",
    image: "https://images.unsplash.com/photo-1501763966092-9aa4ec850e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "nakuru",
    name: "Nakuru ATDC",
    region: "Rift Valley",
    specialization: "Mixed Farming, Agroforestry",
    image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "kisumu",
    name: "Kisumu ATDC",
    region: "Western",
    specialization: "Aquaculture, Rice Farming",
    image: "https://images.unsplash.com/photo-1594112885345-afd6c1ae93fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "kakamega",
    name: "Kakamega ATDC",
    region: "Western",
    specialization: "Sugarcane Farming, Maize Production",
    image: "https://images.unsplash.com/photo-1570912355026-d029dbf93c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "garissa",
    name: "Garissa ATDC",
    region: "North Eastern",
    specialization: "Dryland Agriculture, Livestock Management",
    image: "https://images.unsplash.com/photo-1587825045005-8fd9653dc0e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      <section className="py-12">
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
      <section className="py-12">
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
