import { Box, Card, Typography, CardContent, Stack } from '@mui/material';

export const PostCard = () => {
  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Typography component="h2" variant="h5" pb={2}>
          Making a design system from scratch
        </Typography>
        <Stack direction="row" spacing={2} pb={2}>
          <Typography>12 Feb 2020</Typography>
          <Box component="span">|</Box>
          <Typography>Design, Pattern</Typography>
        </Stack>
        <Typography>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>
      </CardContent>
    </Card>
  );
};
