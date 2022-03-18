import { theme } from '@/utils/theme';
import { Box, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export const BlogCategory = () => {
  return (
    <Box>
      <Stack sx={{ marginBottom: 3 }}>
        <Box>
          <Typography>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</Typography>
        </Box>
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="flex-start">
        {['Javscript', 'NodeJS', 'Angular', 'VueJS', 'ReactJS'].map((caetgory, index) => (
          <Box key={index} mb={1} mr={1} bgcolor={'#f2f2f2'} borderRadius={2} p={1} pl={2} pr={2}>
            <Link href="/" passHref>
              <MuiLink>{caetgory}</MuiLink>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
