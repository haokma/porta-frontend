import { Box, Card, Typography, CardContent, Stack } from '@mui/material';
import Image from 'next/image';
import blogImage from '@/images/blog.jpg';

export const BlogItem = () => {
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Stack direction={{ md: 'row', xs: 'column-reverse' }} spacing={2}>
          <Box>
            <Typography component="h2" variant="h5" pb={2}>
              Making a design system from scratch
            </Typography>
            <Stack direction="row" spacing={2} pb={2}>
              <Typography>12 Feb 2020</Typography>
              <Box component="span">|</Box>
              <Typography>Design, Pattern</Typography>
            </Stack>
            <Typography>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
          </Box>
          <Box
            minWidth={{ lg: '250px', md: '230px', sm: '200px', xs: '100%' }}
            marginBottom={{ md: 0, sm: 4, xs: 4 }}
            className="border-radious-2"
          >
            <Image src={blogImage} layout="responsive" alt="blog-image" />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
