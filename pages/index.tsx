import { HeroSection, RecentFaq, RecentPost, RecentInterview } from '@/components/Home';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box minHeight="100vh">
      <HeroSection />
      <RecentPost />
      <RecentFaq />
      <RecentInterview />
    </Box>
  );
};

Home.Layout = MainLayout;
export default Home;
