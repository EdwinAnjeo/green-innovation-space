
import Layout from "@/components/layout/Layout";
import PartnersCarousel from "@/components/shared/PartnersCarousel";
import { Separator } from "@/components/ui/separator";

const Partners = () => {
  return (
    <Layout>
      <div className="py-12 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-atdc-green mb-4">Our Partners</h1>
          <p className="text-gray-600">
            ATDC collaborates with various organizations to advance agricultural technology and 
            innovation across Kenya. Our partnerships enable us to develop and implement
            sustainable agricultural solutions.
          </p>
        </div>
        
        <Separator className="mb-8 bg-gray-300" />
        
        <div className="mb-16">
          <PartnersCarousel />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
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
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-atdc-green mb-4">Benefits of Partnership</h2>
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
        
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-atdc-green mb-4">Become a Partner</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Interested in partnering with ATDC? Contact us today to discuss potential collaboration 
            opportunities and how we can work together to advance agricultural technology in Kenya.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#CC5500] hover:bg-[#CC5500]/90 text-white px-6 py-3 rounded-md font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
