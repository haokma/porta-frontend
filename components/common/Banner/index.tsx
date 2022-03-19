import { theme } from '@/utils/theme';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

interface BannerProps {
  title: string;
  description: string;
}

export const Banner = (props: BannerProps) => {
  const { title, description } = props;
  return (
    <Box bgcolor={theme.palette.secondary.light} pt={12} pb={10}>
      <Container>
        <Stack justifyContent="center" alignItems="center">
          <Typography component="h1" variant="h3" fontWeight="500">
            {title}
          </Typography>
          <Typography component="h2" variant="h6" mt={1} fontWeight="400">
            {description}
          </Typography>
          <FormControl sx={{ maxWidth: '600px', width: '100%', marginTop: 4 }} variant="outlined">
            <TextField
              id="search"
              type="text"
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton aria-label="search" edge="start">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Stack>
      </Container>
    </Box>
  );
};
