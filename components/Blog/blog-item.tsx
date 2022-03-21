import { formatDate } from '@/utils/format-time';
import { Box, Card, CardContent, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { ShareSocial } from '../common/share-social';
import Image from 'next/image';
export const BlogItem = (props: any) => {
  const { blog } = props;

  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Stack direction="row" mb={2} justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Box
              borderRadius="50%"
              overflow="hidden"
              display="inline"
              width="30px"
              height="30px"
              mr={2}
            >
              <Image
                src={blog.user.avatar_url}
                alt="avatar"
                width="30"
                height="30"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Typography fontWeight={500}>{blog.user.username}</Typography>
            </Box>
          </Stack>
          <ShareSocial url={`/blog/${blog.slug}`} />
        </Stack>
        <Stack direction={{ md: 'row', xs: 'column-reverse' }} spacing={2}>
          <Box>
            <Link href={`/blog/${blog.slug}`} passHref>
              <MuiLink sx={{ fontSize: '28px', cursor: 'pointer' }}>{blog.title}</MuiLink>
            </Link>
            <Stack direction="row" spacing={2} pb={2} mt={2}>
              <Typography>{formatDate(blog.published_at)}</Typography>
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
            {blog.thumbnail_url && (
              <img
                src={blog.thumbnail_url}
                alt=""
                style={{ objectFit: 'cover', width: '100%', borderRadius: '10px' }}
              />
            )}
            {/* <Image src={blog.thumbnail_url} width="100%" alt="blog-image" /> */}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
