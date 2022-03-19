import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Card, CardContent } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export function FaqCard(props: any) {
  const { faq } = props;
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card sx={{ marginBottom: 2, padding: 0 }}>
      <CardContent sx={{ padding: 0 }}>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={faq.question} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={faq.answer} />
            </ListItemButton>
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
}
