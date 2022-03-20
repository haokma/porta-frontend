import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';
import {
  Box,
  Button,
  List,
  ListItemButton,
  Popover,
  Stack,
  Typography,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import { useState } from 'react';

export const ShareSocial = (props: any) => {
  const url = `https://fullstack.edu.vn${props.url}`;
  const [alertOpen, setAlertOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box>
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={() => setAlertOpen(false)}>
        <Alert onClose={() => setAlertOpen(false)} severity="success" variant="filled">
          Sao chép thành công
        </Alert>
      </Snackbar>
      <Button onClick={handleClick} color="primary">
        <MoreVertIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItemButton>
            <FacebookShareButton url={url}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <FacebookIcon size={20} round />
                <Typography ml={2}>Chia sẻ lên Facebook</Typography>
              </Stack>
            </FacebookShareButton>
          </ListItemButton>
          <ListItemButton>
            <TwitterShareButton url={url}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <TwitterIcon size={20} round />
                <Typography ml={2}>Chia sẻ lên Twitter</Typography>
              </Stack>
            </TwitterShareButton>
          </ListItemButton>
          <ListItemButton>
            <EmailShareButton url={url}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <EmailIcon size={20} round />
                <Typography ml={2}>Chia sẻ lên Email</Typography>
              </Stack>
            </EmailShareButton>
          </ListItemButton>

          <ListItemButton>
            <LinkedinShareButton url={url}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <LinkedinIcon size={20} round />
                <Typography ml={2}>Chia sẻ lên Linkedin</Typography>
              </Stack>
            </LinkedinShareButton>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigator.clipboard.writeText(url);
              setAlertOpen(true);
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <LinkIcon />
              <Typography ml={2}>Sao chép liên kết</Typography>
            </Stack>
          </ListItemButton>
        </List>
      </Popover>
    </Box>
  );
};
