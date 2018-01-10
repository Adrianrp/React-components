import React from 'react';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import {
  MoreVert
} from 'material-ui-icons';
import Divider from 'material-ui/Divider';
import ProductCardList from '../Components/ProductCardList';

const styles = {
  padding: '0'
};
const ProductsCard = (props) => {
  let {name, buildingNo, fixtures} = props.data;
  //console.log(props.data, 'products here');

  return (
    <div className="card-container">
      <Card>
        <CardHeader
          title={name}
          subheader={"Building #" + buildingNo}
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
        <CardContent style={styles} >
          <ProductCardList list={fixtures} handleCheckboxChange={props.handleCheckboxChange.bind(this)}/>
        </CardContent>
      </Card>
    </div>
  )
};

export default ProductsCard;