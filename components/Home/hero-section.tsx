import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import avatar from '@/images/hero.jpg';

export const HeroSection = () => {
  return (
    <Box component="section" pt={18} pb={9}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
          spacing={6}
        >
          <Box>
            <Typography component="h1" variant="h3" mb={2}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography
              mb={2}
              sx={{
                maxWidth: '600px',
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button size="large" variant="contained">
              Download Resume
            </Button>
          </Box>
          <Box minWidth="200px">
            <Image src={avatar} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
