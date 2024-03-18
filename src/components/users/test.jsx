import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ChatPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            WhatsApp Clone
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemText primary="Contact 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact 2" />
            </ListItem>
            {/* Add more contacts here */}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {/* Chat messages and input area go here */}
      </main>
    </div>
  );
};

export default ChatPage;
