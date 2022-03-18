import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';

export const RecentPost = () => {
  return (
    <Box component="section" bgcolor="secondary.light" pt={6} pb={6}>
      <Container>
        <Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} mb={2}>
          <Typography variant="h6">Recent posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink display={{ xs: 'none', md: 'inline' }} color="secondary.light">
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          spacing={4}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
