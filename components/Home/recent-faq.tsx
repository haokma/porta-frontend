import { Box, Container, List, Stack, Link as MuiLink, Typography } from '@mui/material';
import { FaqCard } from '../common/faq-card';
import Link from 'next/link';

export const RecentFaq = (props: any) => {
  const { faqList } = props;
  console.log(faqList);
  return (
    <Box pt={4} pb={4}>
      <Container>
        <Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} mb={2}>
          <Typography variant="h6">Recent Faq</Typography>
          <Link href="/faq" passHref>
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
            {faqList.map((faq: any, index: number) => (
              <Box key={index}>
                <FaqCard faq={faq} />
              </Box>
            ))}
          </Stack>
        </List>
      </Container>
    </Box>
  );
};
