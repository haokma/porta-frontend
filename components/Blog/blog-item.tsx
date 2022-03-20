import { Box, Card, CardContent, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import dayjs from 'dayjs';

export const BlogItem = (props: any) => {
  const { blog } = props;
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Stack direction={{ md: 'row', xs: 'column-reverse' }} spacing={2}>
          <Box>
            <Link href={`/blog/${blog.slug}`} passHref>
              <MuiLink sx={{ fontSize: '28px', cursor: 'pointer' }}>{blog.title}</MuiLink>
            </Link>
            <Stack direction="row" spacing={2} pb={2} mt={2}>
              <Typography>{dayjs(new Date(), 'vn').format('YYYY MMMM DD')}</Typography>
              <Box component="span">|</Box>
              <Typography>{blog.min_read} phút đọc</Typography>
            </Stack>
            <Typography>{blog.meta_description}</Typography>
          </Box>
          <Box
            minWidth={{ lg: '250px', md: '230px', sm: '200px', xs: '100%' }}
            marginBottom={{ md: 0, sm: 4, xs: 4 }}
            className="border-radious-2"
          >
            <img src={blog.thumbnail_url} alt="" style={{ objectFit: 'cover', width: '100%' }} />
            {/* <Image src={blog.thumbnail_url} width="100%" alt="blog-image" /> */}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
