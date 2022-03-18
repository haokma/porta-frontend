import { Box, Stack } from '@mui/material';
import { BlogItem } from './blog-item';

export const BlogList = () => {
  return (
    <Box>
      <Stack spacing={2}>
        {[1, 2, 3, 4, 5].map(() => (
          <Box>
            <BlogItem />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
