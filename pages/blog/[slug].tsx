import { BlogContent } from '@/components/blog-details';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box, Container } from '@mui/material';
import axios from 'axios';

const BlogDetails: NextPageWithLayout = (props: any) => {
  const { blog } = props;
  return (
    <Container>
      <Box mt={10}>
        <BlogContent blog={blog} />
      </Box>
    </Container>
  );
};

BlogDetails.Layout = MainLayout;

export async function getStaticPaths() {
  const res = await axios.get('https://api-gateway.fullstack.edu.vn/api/blog-posts');

  const { data: blogList }: any = res.data;
  return {
    paths: blogList?.map((blog: any) => ({
      params: {
        slug: blog.slug,
      },
    })),
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps({ params }: any) {
  const res = await axios.get(
    `https://api-gateway.fullstack.edu.vn/api/blog-posts/${params!.slug}`
  );
  return {
    props: {
      blog: res.data.data,
    }, // will be passed to the page component as props
  };
}
export default BlogDetails;
