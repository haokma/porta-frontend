import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box, Typography } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box minHeight="100vh">
      <Typography component="h1" variant="h3">
        Home Page
      </Typography>
    </Box>
  );
};

Home.Layout = MainLayout;
export default Home;
