
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import StatsGrid from '@/components/shared/StatsGrid';
import StationPreview from '@/components/shared/StationPreview';
import PartnersCarousel from '@/components/shared/PartnersCarousel';
import { ArrowRight, Tractor, Leaf, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Empowering Kenya's Agricultural Future"
        description="The Agriculture Training Development Center is dedicated to transforming agriculture through training, innovation, and sustainable practices."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-atdc-green hover:bg-atdc-green/90">
            <Link to="/about">
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </HeroSection>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For over 15 years, ATDC has been transforming Kenya's agricultural landscape through training, 
              innovation, and sustainable farming practices.
            </p>
          </div>
          
          <Separator className="mb-8 bg-gray-300" />
          
          <StatsGrid />
        </div>
      </section>

      {/* Core Mandate Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-6">Our Core Mandate</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              The Agriculture Training Development Center (ATDC) is committed to building capacity 
              in Kenya's agricultural sector through training, technology transfer, and support services.
            </p>
          </div>
          
          <Separator className="mb-8 bg-gray-300" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                    <Tractor size={24} className="text-atdc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Mechanization Training</h3>
                    <p className="text-gray-600">
                      Equipping farmers with skills to utilize modern agricultural machinery and equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                    <Leaf size={24} className="text-atdc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sustainable Farming</h3>
                    <p className="text-gray-600">
                      Promoting environmentally friendly and climate-smart agricultural practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                    <Users size={24} className="text-atdc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Community Empowerment</h3>
                    <p className="text-gray-600">
                      Building self-reliant farming communities through knowledge sharing and support.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                    <Award size={24} className="text-atdc-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Agricultural Innovation</h3>
                    <p className="text-gray-600">
                      Developing and promoting innovative agricultural technologies and methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl animation-float">
                  <img 
                    src="/lovable-uploads/9d1cc947-7e5c-4104-8732-2754746d3545.png" 
                    alt="ATDC Team Member" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-atdc-orange/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-atdc-blue/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="bg-atdc-orange hover:bg-atdc-orange/90">
              <Link to="/about">
                Read More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ATDC Stations Preview */}
      <StationPreview />
      
      {/* Partners Section */}
      <PartnersCarousel />
    </Layout>
  );
};

export default Index;
