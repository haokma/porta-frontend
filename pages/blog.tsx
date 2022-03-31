import { BlogCategory, BlogList } from '@/components/blog';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useRef } from 'react';
import { useCategory } from '../hooks';

const Blog: NextPageWithLayout = (props: any) => {
  const scrolRef = useRef(null);
  const { blogList } = props;

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
            <BlogList blogList={blogList} />
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
        <div ref={scrolRef}></div>
      </Container>
    </Box>
  );
};

Blog.Layout = MainLayout;
export async function getStaticProps(context: any) {
  const url = 'http://localhost:5000/api/blog';
  const data = await axios.get(url);
  console.log(data.data);
  return {
    props: {
      blogList: data.data.blogList,
    },
    revalidate: 20,
  };
}
export default Blog;
