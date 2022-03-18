import { ROUTE_LIST } from '@/app/routes';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  Toolbar,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ItemRouter } from '@/models/common';

export default function HeaderMobile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box component="div" minWidth="300px" pt={6}>
      <Divider />
      <List>
        {ROUTE_LIST.map((route: ItemRouter, index: number) => (
          <ListItem
            button
            key={index}
            sx={{
              marginBottom: 2,
            }}
          >
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                sx={{ ml: 4, fontWeight: 'medium' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }} display={{ xs: 'block', md: 'none' }}>
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleSlider}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} anchor="left" onClose={toggleSlider}>
          {sideList()}
        </Drawer>
      </Toolbar>
    </Box>
  );
}
