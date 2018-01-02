import React from 'react';
import Card, {CardHeader, CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import {
  MoreVert
} from 'material-ui-icons';
import Divider from 'material-ui/Divider';

const ProductsCard = (props) => {
  return (
    <div className="card-container">
      <Card>
        <CardHeader
          title="Title"
          subheader="Subheader"
          action={
            <IconButton
              className="header-card-more-btn"
              aria-label="more-vertical"
              onClick={props.handleClickOpen}>
              <MoreVert/>
            </IconButton>
          }
        />
        <Divider light />
        <CardContent>
          list here
        </CardContent>
      </Card>
    </div>
  )
};

export default ProductsCard;