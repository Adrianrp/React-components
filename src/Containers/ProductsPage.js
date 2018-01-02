import React, { Component } from 'react';
import AppBarDashboard from '../Components/AppBar';
import ProductsCard from '../Components/ProductsCard';
import Button from 'material-ui/Button';
import ProductsUserSettings from '../Components/ProductsUserSettings';

class ProductsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      notify: false
    };
  }

  handleRequestClose() {
    return this.setState({
      open:false
    })
  }
  handleClickOpen() {
    this.setState({
      open:true
    })
  }
  handleSwitch() {
    this.setState({
      notify: !this.state.notify
    })
  }
  render () {
    return (
        <div className="dashboard-container">
          <AppBarDashboard/>
          <ProductsCard handleClickOpen={this.handleClickOpen.bind(this)}/>
          <ProductsCard/>
          <ProductsUserSettings
            isOpen={this.state.open}
            handleClose={this.handleRequestClose.bind(this)}
            handleSwitch={this.handleSwitch.bind(this)}
            shouldNotify={this.state.notify}/>
        </div>
    )
  }
}

export default ProductsPageContainer;
