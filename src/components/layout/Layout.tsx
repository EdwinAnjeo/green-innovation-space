
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
        <section className="bg-white py-12">
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
      <Footer />
    </div>
  );
};

export default Layout;
