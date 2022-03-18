import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <Box pt={6} pb={6}>
      <Container>
        <Stack direction="row" alignItems="center" spacing={3} justifyContent="center">
          <Box>
            <FacebookIcon />
          </Box>
          <Box>
            <TwitterIcon />
          </Box>
          <Box>
            <LinkedInIcon />
          </Box>
          <Box>
            <InstagramIcon />
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" mt={2}>
          <Typography>Copyright ©2020 All rights reserved</Typography>
        </Stack>
      </Container>
    </Box>
  );
};
