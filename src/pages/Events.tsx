
import Layout from '@/components/layout/Layout';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "Annual Agricultural Innovation Summit",
    date: "June 15-17, 2023",
    location: "Nairobi, Kenya",
    time: "9:00 AM - 5:00 PM",
    description: "Join us for three days of knowledge sharing, networking, and innovation showcases focusing on the latest agricultural technologies and sustainable farming practices.",
    image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png"
  },
  {
    id: 2,
    title: "Farmers Training Workshop",
    date: "July 10, 2023",
    location: "ATDC Nakuru",
    time: "10:00 AM - 3:00 PM",
    description: "A comprehensive training workshop on modern irrigation techniques, sustainable farming practices, and crop management for local farmers.",
    image: "/lovable-uploads/d0c15681-662b-4837-a17c-4178efc8f433.png"
  },
  {
    id: 3,
    title: "Agricultural Machinery Demonstration Day",
    date: "August 22, 2023",
    location: "ATDC Bungoma",
    time: "9:00 AM - 4:00 PM",
    description: "Experience live demonstrations of the latest agricultural machinery and equipment designed to enhance farming efficiency and productivity.",
    image: "/lovable-uploads/87a057d4-92b9-4e7e-af58-ff17b236dead.png"
  }
];

const Events = () => {
  return (
    <Layout>
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4 text-center animate-fade-in">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center animate-fade-in animation-delay-200">
              Join us at our various events and training programs designed to enhance agricultural knowledge 
              and promote sustainable farming practices across Kenya.
            </p>
          </div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in hover-scale"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-2/5">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-64 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-atdc-green">
                        <Calendar size={16} className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-atdc-green">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-atdc-green">
                        <Clock size={16} className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <Button asChild className="bg-atdc-orange hover:bg-atdc-orange/90">
                      <Link to={`/events/${event.id}`}>
                        Register Now <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="border-atdc-green text-atdc-green hover:bg-atdc-green/10 bg-atdc-green text-white hover:bg-atdc-green/90">
              <Link to="/events/archive">
                View Past Events
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
