
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
      {showPartnersCarousel && <PartnersCarousel />}
      <Footer />
    </div>
  );
};

export default Layout;
