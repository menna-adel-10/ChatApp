import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, alpha } from '@mui/material';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Link} from 'react-router-dom'


const drawerWidth = 240;
const navItems = [
  <AccountCircleRoundedIcon fontSize="large"/>,
  <ForumOutlinedIcon fontSize="large"/>,
  <Diversity3SharpIcon fontSize="large"/>,
  <LogoutOutlinedIcon fontSize="large"/>
    ]

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#78aaa1' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Logo
          </Typography>

          
        {/* Start Search  */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
      <div style={{ position: 'relative', borderRadius: '15px', backgroundColor: alpha('#ffffff', 0.15), marginRight: '10px' }}>
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon sx={{ color: '#ffffff' }} />
        </IconButton>
        <InputBase
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          sx={{ color: '#ffffff', marginLeft: '5px', width: '40%' }}
        />
      </div>
    </div>
        {/* End Search */}

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundColor: '#78aaa1', color:'white' },      
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
