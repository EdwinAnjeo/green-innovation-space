
import Layout from '@/components/layout/Layout';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MapComponent from '@/components/shared/MapComponent';
import { Separator } from '@/components/ui/separator';

const ContactPage = () => {
  return (
    <Layout>
      <div className="py-12 container mx-auto px-4 md:px-6 pt-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-atdc-green mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-gray-600 animate-fade-in animation-delay-200">
            Have questions or need assistance? Reach out to us through any of our contact channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-atdc-green/10 rounded-xl shadow-md p-8 hover-scale animate-fade-in">
            <h2 className="text-2xl font-bold text-atdc-green mb-6">Get in Touch</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-atdc-green focus:border-atdc-green"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-atdc-green focus:border-atdc-green"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-atdc-green focus:border-atdc-green"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-atdc-green focus:border-atdc-green"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-atdc-green hover:bg-atdc-green/90">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="bg-[#CC5500]/10 rounded-xl shadow-md p-8 hover-scale animate-fade-in animation-delay-200">
            <h2 className="text-2xl font-bold text-[#CC5500] mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#CC5500]/20 p-3 rounded-full mr-4">
                  <MapPin className="text-[#CC5500]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    ATDC Headquarters, Kilimo House<br />
                    Cathedral Road, Nairobi<br />
                    Kenya
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#CC5500]/20 p-3 rounded-full mr-4">
                  <Phone className="text-[#CC5500]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                  <p className="text-gray-600">
                    +254 20 XXX XXXX<br />
                    +254 7XX XXX XXX
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#CC5500]/20 p-3 rounded-full mr-4">
                  <Mail className="text-[#CC5500]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Address</h3>
                  <p className="text-gray-600">
                    info@atdc.go.ke<br />
                    support@atdc.go.ke
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#CC5500]/20 p-3 rounded-full mr-4">
                  <Clock className="text-[#CC5500]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-atdc-green mb-6 text-center animate-fade-in">Visit Our Station</h2>
          <div className="flex justify-center mb-8 animate-fade-in animation-delay-200">
            <Button asChild className="bg-[#CC5500] hover:bg-[#CC5500]/90">
              <Link to="/stations">
                View All Stations <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mb-12 animate-fade-in animation-delay-300">
          <h2 className="text-2xl font-bold text-atdc-green mb-6">Find Us</h2>
          <MapComponent />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
