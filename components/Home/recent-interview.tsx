import { Box, Container, List, Stack, Link as MuiLink, Typography } from '@mui/material';
import { FaqCard } from '../common/faq-card';
import Link from 'next/link';

export const RecentInterview = (props: any) => {
  const { interviewList } = props;
  return (
    <Box pt={4} pb={4} bgcolor="secondary.light">
      <Container>
        <Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} mb={2}>
          <Typography variant="h6">Recent Interview</Typography>
          <Link href="/interviews" passHref>
            <MuiLink display={{ xs: 'none', md: 'inline' }} color="secondary.light">
              View all
            </MuiLink>
          </Link>
        </Stack>
        <List sx={{ width: '100%' }} component="nav" aria-labelledby="nested-list-subheader">
          <Stack
            sx={{
              '& > div': {
                width: '100%',
              },
            }}
          >
            {interviewList.map((interview: any, index: number) => (
              <Box key={index}>
                <FaqCard faq={interview} />
              </Box>
            ))}
          </Stack>
        </List>
      </Container>
    </Box>
  );
};
