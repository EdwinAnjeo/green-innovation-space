
import Layout from "@/components/layout/Layout";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import { Separator } from "@/components/ui/separator";

const Partners = () => {
  return (
    <Layout showPartnersCarousel={false}>
      <div className="py-12 container mx-auto px-4 md:px-6 pt-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-atdc-green mb-4 animate-fade-in">Meet Our Partners</h1>
          <p className="text-gray-600 animate-fade-in animation-delay-200">
            ATDC collaborates with various organizations to advance agricultural technology and 
            innovation across Kenya. Our partnerships enable us to develop and implement
            sustainable agricultural solutions.
          </p>
        </div>
        
        <div className="mb-16 animate-fade-in max-w-5xl mx-auto">
          <PartnersCarousel showButtons={true} noAutoScroll={true} />
        </div>
        
        <Separator className="mb-8 bg-gray-300" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 animate-fade-in animation-delay-300">
          <div className="bg-atdc-green/10 rounded-xl shadow-md p-6 hover-scale">
            <h2 className="text-2xl font-bold text-atdc-green mb-4">Partner With Us</h2>
            <p className="text-gray-600 mb-4">
              We are always looking for new organizations to collaborate with. By partnering with ATDC, 
              you can contribute to agricultural development and innovation in Kenya.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Access to agricultural technology expertise</li>
              <li>Collaboration on innovative projects</li>
              <li>Network with agricultural stakeholders</li>
              <li>Contribute to sustainable farming practices</li>
            </ul>
          </div>
          
          <div className="bg-[#CC5500]/10 rounded-xl shadow-md p-6 hover-scale">
            <h2 className="text-2xl font-bold text-[#CC5500] mb-4">Benefits of Partnership</h2>
            <p className="text-gray-600 mb-4">
              Our partnerships are designed to be mutually beneficial, creating value for all stakeholders
              involved while advancing agricultural innovation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Knowledge and technology transfer</li>
              <li>Research and development opportunities</li>
              <li>Access to ATDC's network of stations</li>
              <li>Capacity building and training programs</li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 bg-gray-300" />
        
        {/* Become a Partner CTA Section - Added back as requested */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-16 animate-fade-in animation-delay-400">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-atdc-green mb-6">Become Our Partner</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of partners and contribute to Kenya's agricultural development. 
              Together, we can create innovative solutions for sustainable farming and food security.
            </p>
            <a 
              href="mailto:partnerships@atdc.go.ke" 
              className="inline-block bg-[#CC5500] hover:bg-[#CC5500]/90 text-white px-6 py-3 rounded-md font-medium shadow-md hover-scale"
            >
              Contact our Partnership Team
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
