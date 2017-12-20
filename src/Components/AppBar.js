import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import {
  Menu,
  Search,
  FilterList,
  MoreVert
} from 'material-ui-icons';

const AppBarDashboard = () => {
  return (
    <div>
      <AppBar
        position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <Menu/>
          </IconButton>
          <Typography className="appbar-title" type="title" color="inherit">
            Products
          </Typography>
          <div className="appbar-icon-container">
            <IconButton color="contrast" aria-label="filter-list">
              <FilterList/>
            </IconButton>
            <IconButton color="contrast" aria-label="search">
              <Search/>
            </IconButton>
            <IconButton color="contrast" aria-label="more-vertical">
              <MoreVert/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default AppBarDashboard;