import { HeroSection, RecentPost } from '@/components/Home';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box minHeight="100vh">
      <HeroSection />
      <RecentPost />
    </Box>
  );
};

Home.Layout = MainLayout;
export default Home;
