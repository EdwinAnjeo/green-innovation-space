
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import StatsGrid from '@/components/shared/StatsGrid';
import StationPreview from '@/components/shared/StationPreview';
import { ArrowRight, Tractor, Leaf, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Agricultural Engineering Services Directorate"
        subtitle="State Department for Crops Development & Agriculture Research"
        description={<em>Empowering Kenya's Agricultural Future</em>}
        buttonColor="orange"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-atdc-green hover:bg-atdc-green/90">
            <Link to="/about">
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-[#CC5500] hover:bg-[#CC5500]/90 text-white border-[#CC5500]/30">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </HeroSection>

      {/* Stats Section */}
      <section className="py-20 bg-[#F1F0FB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4 animate-fade-in">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              For over 15 years, ATDC has been transforming Kenya's agricultural landscape through training, 
              innovation, and sustainable farming practices.
            </p>
          </div>
          
          <StatsGrid />
        </div>
      </section>
      
      <Separator className="h-1 bg-gray-200" />

      {/* Core Mandate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-6 animate-fade-in">Our Core Mandate</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto animate-fade-in animation-delay-200">
              The Agriculture Training Development Center (ATDC) is committed to building capacity 
              in Kenya's agricultural sector through training, technology transfer, and support services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4 flex-shrink-0">
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
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4 flex-shrink-0">
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
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4 flex-shrink-0">
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
                  <div className="bg-atdc-green/10 p-3 rounded-full mr-4 flex-shrink-0">
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
              <div className="relative flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-xl w-3/4 lg:w-5/6 mx-auto hover-scale animate-fade-in">
                  <img 
                    src="/lovable-uploads/393e137b-15c5-489d-8930-b1bbe97f47a9.png" 
                    alt="ATDC Tractor" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#F97316]/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#0EA5E9]/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="bg-atdc-green hover:bg-atdc-green/90 animate-pulse">
              <Link to="/about">
                Read More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Separator className="h-1 bg-gray-200" />

      {/* ATDC Stations Preview */}
      <StationPreview />
    </Layout>
  );
};

export default Index;
