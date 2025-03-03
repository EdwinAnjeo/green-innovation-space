
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import PartnersCarousel from '../shared/PartnersCarousel';

interface LayoutProps {
  children: ReactNode;
  showPartnersCarousel?: boolean;
}

const Layout = ({ children, showPartnersCarousel = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      {showPartnersCarousel && 
        <section className="bg-white py-12 animate-fade-in">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We collaborate with various organizations to promote agricultural development across Kenya.
              </p>
            </div>
            <PartnersCarousel linkToPartners={true} />
          </div>
        </section>
      }
      
      {/* Coat of Arms Section - Updated text to Agriculture Training Development Center */}
      <section className="bg-gray-50 py-10 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <img 
              src="/lovable-uploads/7d8b1801-1c96-468a-9000-c7b72f68c9a3.png" 
              alt="Coat of Arms of Kenya" 
              className="h-24 md:h-32 mb-4 animate-float"
            />
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Official Website of Agriculture Training Development Center
              <br />
              Republic of Kenya
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Layout;
