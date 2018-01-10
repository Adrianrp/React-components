import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import {
  Clear,
  Delete,
  ContentCopy,
  InsertChart,
  MoreVert
} from 'material-ui-icons';

const ItemDrawer = (props) => {
  return (
    <Drawer
      open={props.drawerOpen}
      anchor="bottom"
    >
      <Toolbar>
        <IconButton>
          <Clear
            onClick={props.handleClearClick.bind(this)}/>
        </IconButton> <span className="card-content-list">1 item selected</span>
        <div className="appbar-icon-container">
          <IconButton>
            <Delete/>
          </IconButton>
          <IconButton>
            <ContentCopy/>
          </IconButton>
          <IconButton>
            <InsertChart/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </Toolbar>
    </Drawer>
  )
};

export default ItemDrawer;