import { Box, Card, CardContent, Link as MuiLink, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { ShareSocial } from '../common';

export const PostCard = (props: any) => {
  const { blog } = props;
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
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
        <Link href={`/blog/${blog.slug}`} passHref>
          <MuiLink sx={{ fontSize: '28px', cursor: 'pointer' }}>{blog.title}</MuiLink>
        </Link>

        <Stack direction="row" spacing={2} pb={2} mt={2}>
          <Typography>{dayjs(blog.published_at, 'vn').format('YYYY MMMM DD')}</Typography>
          <Box component="span">|</Box>
          <Typography>{blog.min_read} phút đọc </Typography>
        </Stack>
        <Typography overflow="hidden" whiteSpace="pre-line" textOverflow="ellipsis" height={100}>
          {blog.meta_description}
        </Typography>
      </CardContent>
    </Card>
  );
};
