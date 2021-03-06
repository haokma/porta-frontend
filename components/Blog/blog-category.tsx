import { Box, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface BlogCategoryProps {
  categories: any;
}

export const BlogCategory = (props: BlogCategoryProps) => {
  const router = useRouter();

  const { categories } = props;
  return (
    <Box minWidth="250px">
      <Stack sx={{ marginBottom: 3 }}>
        <Box>
          <Typography>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</Typography>
        </Box>
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="flex-start">
        {categories?.map((category: any, index: any) => (
          <Box key={index} mb={1} mr={1} bgcolor={'#f2f2f2'} borderRadius={2} p={1} pl={2} pr={2}>
            <Link href={`${router.pathname}?topic=${category.slug}`} passHref>
              <MuiLink>{category.title}</MuiLink>
            </Link>
          </Box>
        ))}
        <Box mb={1} mr={1} bgcolor={'#f2f2f2'} borderRadius={2} p={1} pl={2} pr={2}>
          <Link href={`${router.pathname}`} passHref>
            <MuiLink>Tát cả</MuiLink>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
