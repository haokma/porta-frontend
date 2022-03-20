import { BlogCategory, BlogList } from '@/components/Blog';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useCategory } from '../hooks';

const Blog: NextPageWithLayout = () => {
  const { categoryList } = useCategory();
  return (
    <Box mt={2}>
      <Container>
        <Box mt={10} mb={4}>
          <Typography component="h1" variant="h4">
            Danh sách bài viết
          </Typography>
        </Box>
        <Stack
          direction={{ md: 'column-reverse', xs: 'column-reverse', lg: 'row' }}
          justifyContent="space-between"
          spacing={5}
        >
          <Box flexGrow={1}>
            <BlogList />
          </Box>
          <Box
            sx={{
              marginBottom: {
                sm: 6,
                md: 0,
              },
            }}
          >
            <BlogCategory categories={categoryList} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

Blog.Layout = MainLayout;

export default Blog;
