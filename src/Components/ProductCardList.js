import React from 'react';
import List, {ListItem, ListItemSecondaryAction, ListSubheader, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const productCardlist = (props) => {
  let fixtures = props.list.map((data, i) => {
    let {id, location, status} = data;
    return (
      <ListItem
        key={i}
        divider={true}

      >
        <Checkbox/>
        <div>
          Fixture: {id}<br />
          <span className="card-content-list">Location: {location}</span><br />
          <span className="card-content-list">Status: {status}</span>
        </div>
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