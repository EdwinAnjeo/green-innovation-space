
import React from 'react';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the success stories data with detailed information
const successStoriesData = [
  {
    id: "1",
    title: "ATDC Mtwapa & SMEs in the Coconut Value Chain",
    image: "/lovable-uploads/0dec4fcd-07ca-4057-9198-a6e5b1961d49.png",
    description: "ATDC Mtwapa collaborates with SMEs in the coconut value chain across Kilifi, Mombasa, Kwale, and Taita-Taveta counties. The focus is on developing, fabricating, and testing appropriate agro-processing technologies for coconut.",
    keyAchievements: [
      "Conducted 72 trainings on the coconut value chain since 2018.",
      "Incubated 20 MSMEs focusing on coconut, cassava, and peanuts.",
      "Developed coconut scrapers, milk pressers, fermentation chambers, and direct oil press machines.",
      "Promoted technological advancements, including cold-pressing methods for oil extraction."
    ],
    challengesAddressed: [
      "Climate change resilience through conservation agriculture training.",
      "Market access issues by improving product quality for SME branding."
    ]
  },
  {
    id: "2",
    title: "Bando Chemical Belts Trial for Rice Combine Harvesters (ATDC Siakago)",
    image: "/lovable-uploads/110e6d67-493c-4314-bce6-0d3ad2358ce8.png",
    description: "ATDC Siakago partnered with Bando Chemicals Ltd to pilot high-quality belts for rice combine harvesters at Mwea Irrigation Scheme.",
    keyAchievements: [
      "Piloted Bando belts with MRGM (Kubota harvester) and Mr. John Njenga (FM World 102 harvester).",
      "Positive feedback: Increased efficiency, reduced breakdowns, and improved harvesting in wet conditions.",
      "Linked service providers to Bando suppliers for sustained access to quality belts."
    ],
    challengesAddressed: [
      "Poor-quality belts led to frequent breakdowns and high maintenance costs.",
      "Service providers previously relied on importing unreliable belts from Tanzania."
    ]
  },
  {
    id: "3",
    title: "Enhancing Sustainability in the Rice Value Chain (ATDC Siakago, AFICAT, JICA)",
    image: "/lovable-uploads/237d93b7-93f1-44f9-9c4b-94e1268412a8.png",
    description: "Collaborative efforts between ATDC Siakago, AFICAT, and JICA Advisor to introduce innovative solutions in the rice value chain.",
    keyAchievements: [
      "Introduced moisture meters through KETT Electric Company to optimize rice harvesting.",
      "Piloted telematic devices for monitoring farm machinery performance.",
      "Demonstrated high-quality Bando belts, improving efficiency of combine harvesters.",
      "Showcased EBARA pumps, linking Kenyan businesses with Japanese manufacturers.",
      "Introduced mechanized rice transplanters, reducing manual labor from 18 hours to 45 minutes per acre."
    ],
    challengesAddressed: [
      "Inefficient rice transplanting methods.",
      "Lack of remote monitoring for farm machinery.",
      "Poor post-harvest handling due to inadequate moisture measurement."
    ]
  },
  {
    id: "4",
    title: "ATDC Katumani SME Incubation (Beekeeping & Agro-Processing)",
    image: "/lovable-uploads/25322486-92b7-45ea-837c-4360c9f718fc.png",
    description: "ATDC Katumani supported SMEs like Julius Mutuku's beekeeping venture and Muuo wa Sombe's agro-processing business in Makueni.",
    keyAchievements: [
      "Sponsored Mutuku for advanced beekeeping training at the National Beekeeping Institute.",
      "Helped Muuo wa Sombe scale tamarind and baobab jam production from 200 to 1,000 bottles weekly.",
      "Assisted Muuo wa Sombe in business registration as \"Kambu Production.\""
    ],
    challengesAddressed: [
      "Market expansion: SMEs struggled to meet KEBS certification requirements.",
      "Climate change effects led to a shift from dairy farming to beekeeping."
    ]
  },
  {
    id: "5",
    title: "ATDC Nakuru & SMEs in the Potato Value Chain",
    image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png",
    description: "ATDC Nakuru supports SMEs in the potato value chain through training, mechanization, and quality assurance.",
    keyAchievements: [
      "Partnered with Spurs Crisps and Willy Products to help them meet KEBS standards and access supermarket shelves.",
      "Provided SMEs with training on food safety and climate-smart farming.",
      "Developed cost-effective harvesting equipment in ATDC's 200 sq. ft. fabrication workshop."
    ],
    challengesAddressed: [
      "Lack of quality control in potato processing.",
      "Limited mechanization in harvesting and post-harvest handling."
    ]
  },
  {
    id: "6",
    title: "ATDC Siakago Power Tiller Demonstration (JICA Project)",
    image: "/lovable-uploads/6e0f94ff-4fa7-4701-bc2d-69b0182f64ba.png",
    description: "ATDC Siakago and JICA introduced a power tiller with multiple attachments for mechanized farming.",
    keyAchievements: [
      "Demonstrated ploughing, leveling, and reaping to service providers in Mbeere-North.",
      "Addressed efficiency concerns, fuel consumption, and machine adaptability.",
      "Ensured service providers were linked to suppliers for continuous access to mechanized solutions."
    ],
    challengesAddressed: [
      "High cost of farm machinery without financing options.",
      "Lack of awareness on available mechanization solutions."
    ]
  }
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4 text-center">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Discover how our Agricultural Training Development Centers are making a positive impact across Kenya
              through innovation, training, and technology transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story) => (
              <div 
                key={story.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in hover-scale"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-atdc-green">{story.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/success-stories/${story.id}`} 
                      className="inline-flex items-center text-[#CC5500] font-medium"
                    >
                      Read full story
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
