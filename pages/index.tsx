import { HeroSection, RecentFaq, RecentInterview, RecentPost } from '@/components/Home';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box } from '@mui/material';
import axios from 'axios';

const Home: NextPageWithLayout = (props: any) => {
  const { blogList } = props;
  console.log(blogList);
  return (
    <Box minHeight="100vh">
      <HeroSection />
      <RecentPost blogList={blogList} />
      <RecentFaq />
      <RecentInterview />
    </Box>
  );
};

Home.Layout = MainLayout;

export async function getStaticProps(context: any) {
  const url = 'http://localhost:5000/api/blog?limit=2&page=1';
  const data = await axios.get(url);
  console.log(data.data);
  return {
    props: {
      blogList: data.data.blogList,
    },
    revalidate: 20,
  };
}
export default Home;
