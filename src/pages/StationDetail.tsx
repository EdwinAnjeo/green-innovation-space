
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { stationsData, defaultStation } from '@/data/stationsData';
import StationHero from '@/components/station/StationHero';
import ContactInfoSection from '@/components/station/ContactInfoSection';
import EngineerSection from '@/components/station/EngineerSection';
import StaffSection from '@/components/station/StaffSection';
import FunctionsSection from '@/components/station/FunctionsSection';
import SuccessStorySection from '@/components/station/SuccessStorySection';

const StationDetail = () => {
  const { stationId } = useParams<{ stationId: string }>();
  
  const station = stationsData[stationId as keyof typeof stationsData] || {
    ...defaultStation,
    name: `${stationId?.charAt(0).toUpperCase()}${stationId?.slice(1)} ATDC`
  };

  return (
    <Layout>
      <div className="w-full">
        <StationHero station={station} />
        <ContactInfoSection station={station} />
        <EngineerSection station={station} />
        <StaffSection station={station} />
        <FunctionsSection station={station} />
        <SuccessStorySection station={station} />
      </div>
    </Layout>
  );
};

export default StationDetail;
