import { Stack, Box } from '@mui/material';
import { Header, Footer } from '../common';

export const MainLayout = ({ children }: any) => {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
};
