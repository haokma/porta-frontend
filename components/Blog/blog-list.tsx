import { Box, Stack } from '@mui/material';
import { BlogItem } from './blog-item';

export const BlogList = (props: any) => {
  const { blogList } = props;
  return (
    <Box>
      <Stack spacing={2}>
        {blogList?.map((blog: any, index: number) => (
          <Box key={index}>
            <BlogItem blog={blog} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
