import { theme } from '@/utils/theme';
import {
  Box,
  Stack,
  Typography,
  FormControl,
  FilledInput,
  InputLabel,
  IconButton,
  InputAdornment,
  Container,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Banner = () => {
  return (
    <Box bgcolor={theme.palette.secondary.light} pt={12} pb={10}>
      <Container>
        <Stack justifyContent="center" alignItems="center">
          <Typography component="h1" variant="h3" fontWeight="500">
            WEB FAQ
          </Typography>
          <Typography component="h2" variant="h6" mt={1} fontWeight="400">
            Hỏi hay đáp chất - Code xịn mỗi ngày
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
