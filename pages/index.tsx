import { HeroSection, RecentFaq, RecentInterview, RecentPost } from '@/components/Home';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box } from '@mui/material';
import axios from 'axios';

const Home: NextPageWithLayout = (props: any) => {
  const { blogList, faqList, interviewList } = props;
  return (
    <Box minHeight="100vh">
      <HeroSection />
      <RecentPost blogList={blogList} />
      <RecentFaq faqList={faqList} />
      <RecentInterview interviewList={interviewList} />
    </Box>
  );
};

Home.Layout = MainLayout;

export async function getStaticProps(context: any) {
  const url = 'http://localhost:5000/api/blog?limit=2&page=1';
  const urlFaq = 'http://localhost:5000/api/faq?limit=5&page=1';
  const urlFaInterview = 'http://localhost:5000/api/interview?limit=5&page=1';

  const data = await Promise.all([
    await axios.get(url),
    await axios.get(urlFaq),
    await axios.get(urlFaInterview),
  ]);
  return {
    props: {
      blogList: data[0].data.blogList,
      faqList: data[1].data.faqList,
      interviewList: data[2].data.interviewList,
    },
    revalidate: 20,
  };
}
export default Home;
