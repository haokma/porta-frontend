import { BlogCategory } from '@/components/blog';
import { Banner } from '@/components/common';
import { FaqCard } from '@/components/Home';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box, Container, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useCategory } from '../hooks';
import { useEffect, useState } from 'react';
import queryString from 'query-string';

const Faq: NextPageWithLayout = () => {
  const router = useRouter();
  const { categoryList } = useCategory('faq');

  const [filter, setFilter] = useState<any>({
    limit: 10,
    page: 1,
    topic: '',
  });

  useEffect(() => {
    let { limit, page, topic }: any = router.query;
    if (topic) {
      topic = categoryList?.find((c: any) => c.slug === topic);
    }

    const topicId = topic?._id;
    console.log(topicId);

    setFilter({ ...filter, limit, topic: topicId, page });
  }, [router.query.topic]);

  const { data } = useSWR(`/faq?${queryString.stringify(filter)}`);

  return (
    <Box>
      <Banner title="WEB FAQ" description="Hỏi hay đáp chất - Code xịn mỗi ngày" />
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        <Stack
          direction={{ md: 'column-reverse', xs: 'column-reverse', lg: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          mb={2}
          spacing={4}
        >
          <Box mb={2} flexGrow={1} width="100%">
            {data?.faqList.map((faq: any, index: any) => (
              <FaqCard faq={faq} key={index} />
            ))}
          </Box>
          <Box minWidth="300px">
            <BlogCategory categories={categoryList} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

Faq.Layout = MainLayout;

export default Faq;
