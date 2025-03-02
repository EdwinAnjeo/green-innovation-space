
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="py-12 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-atdc-green mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about our agricultural technologies or services? 
            We're here to help. Reach out to us using the contact information below.
          </p>
        </div>
        
        <Separator className="mb-8 bg-gray-300" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-atdc-green mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-atdc-green"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-atdc-green"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-atdc-green"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-atdc-green"
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="bg-[#CC5500] hover:bg-[#CC5500]/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-atdc-green mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                  <MailIcon className="text-atdc-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@atdc.go.ke</p>
                  <p className="text-gray-600">support@atdc.go.ke</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                  <PhoneIcon className="text-atdc-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+254 700 000 000</p>
                  <p className="text-gray-600">+254 800 000 000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                  <MapPinIcon className="text-atdc-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Headquarters</h3>
                  <p className="text-gray-600">Kilimo House, Cathedral Road</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-atdc-green/10 p-3 rounded-full mr-4">
                  <ClockIcon className="text-atdc-green" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-atdc-green mb-2">Visit Our Stations</h3>
              <p className="text-gray-600 mb-4">
                We have 10 stations across Kenya. Find the one nearest to you to learn more about our services.
              </p>
              <Button asChild className="bg-atdc-green hover:bg-atdc-green/90">
                <a href="/stations">View Stations</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Map placeholder - in a real application, you would integrate Google Maps or similar */}
        <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center mb-12">
          <p className="text-gray-500">Map would be displayed here</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
