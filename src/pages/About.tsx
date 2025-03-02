
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/shared/HeroSection';
import StatsGrid from '@/components/shared/StatsGrid';
import StationPreview from '@/components/shared/StationPreview';
import { CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  // Array of leadership team members
  const leadershipTeam = [
    {
      name: "Dr. James Mwangi",
      position: "Director, ATDC",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Dr. Mwangi has over 20 years of experience in agricultural education and extension services."
    },
    {
      name: "Ms. Jane Waithaka",
      position: "Deputy Director, Administration",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Ms. Waithaka oversees administrative functions and human resource development across all ATDC centers."
    },
    {
      name: "Mr. Daniel Otieno",
      position: "Deputy Director, Technical Services",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Mr. Otieno leads innovation in agricultural training methodologies and technical capacity building."
    },
    {
      name: "Dr. Sarah Kiplangat",
      position: "Head, Quality Assurance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Dr. Kiplangat ensures high standards in all training programs and curriculum development."
    }
  ];

  // Timeline events for ATDC history
  const timelineEvents = [
    {
      year: "1986",
      title: "Inception of ATDC",
      description: "The ATDC was established under the Ministry of Agriculture to address the need for practical agricultural training in Kenya."
    },
    {
      year: "1995",
      title: "Expansion Phase",
      description: "ATDC expanded its network to 10 centers across different agricultural zones in Kenya."
    },
    {
      year: "2005",
      title: "Modernization Initiative",
      description: "A comprehensive modernization program was launched to update training facilities and curriculum."
    },
    {
      year: "2012",
      title: "Partnership Framework",
      description: "ATDC established formal partnerships with international agricultural institutions and research organizations."
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Introduction of digital learning platforms and technologies to enhance training delivery."
    },
    {
      year: "Present",
      title: "Sustainable Agriculture Focus",
      description: "Current focus on climate-smart agriculture, food security, and sustainable farming practices."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="About ATDC"
        description="Learn about our mission, history, and commitment to agricultural development in Kenya."
        bgImage="https://images.unsplash.com/photo-1595004926844-5d25571a30b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* What is ATDC Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-6">What is ATDC?</h2>
              <p className="text-gray-600 mb-4">
                The Agriculture Training Development Center (ATDC) is a specialized institution under Kenya's Ministry of Agriculture, 
                dedicated to building capacity in the agricultural sector through training, technology transfer, and support services.
              </p>
              <p className="text-gray-600 mb-4">
                ATDC operates a network of centers across Kenya, each tailored to address the specific agricultural needs and 
                opportunities of their respective regions. Our centers serve as hubs for innovation, learning, and community development.
              </p>
              <p className="text-gray-600 mb-6">
                Through collaboration with local and international partners, ATDC provides cutting-edge training programs, 
                research opportunities, and extension services to farmers, agricultural professionals, and rural communities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-atdc-green" />
                  <span>Practical Training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-atdc-green" />
                  <span>Technology Transfer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-atdc-green" />
                  <span>Research & Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-atdc-green" />
                  <span>Extension Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-atdc-green" />
                  <span>Community Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-atdc-green" />
                  <span>Sustainable Practices</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Farmers in training session" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-atdc-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-atdc-green/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our History</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our founding to the present day, ATDC has evolved to meet the changing needs of Kenya's agricultural sector.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-atdc-green/20"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-atdc-green"></div>
                  
                  {/* Event Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0`}>
                    <div className={`bg-white p-6 rounded-xl shadow-md inline-block animate-fade-in ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="text-sm font-bold text-atdc-orange mb-1">{event.year}</div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated team guiding ATDC towards excellence in agricultural training and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover-scale"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-atdc-green font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The numbers that demonstrate our commitment to agricultural development in Kenya.
            </p>
          </div>
          
          <StatsGrid />
        </div>
      </section>
      
      {/* ATDC Stations Preview */}
      <StationPreview />
    </Layout>
  );
};

export default AboutPage;
