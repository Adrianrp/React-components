import React from 'react';
import List, {ListItem, ListItemSecondaryAction} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import {
  KeyboardArrowRight
} from 'material-ui-icons';

const productCardlist = (props) => {
  let fixtures = props.list.map((data, i) => {
    let {id, location, status} = data;
    return (
      <ListItem
        key={i}
        divider={true}
        button
        disableRipple
      >
        <Checkbox
          onChange={props.handleCheckboxChange.bind(this)}/>
        <div>
          Fixture: {id}<br />
          <span className="card-content-list">Location: {location}</span><br />
          <span className="card-content-list">Status: {status}</span>
        </div>
        <ListItemSecondaryAction>
          <IconButton>
            <KeyboardArrowRight/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  });

  return (
    <List disablePadding={true}>
      {fixtures}
    </List>
  )
};

export default productCardlist;