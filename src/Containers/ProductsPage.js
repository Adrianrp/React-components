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
      notify: false,
      products: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3004/products')
      .then(products => {
        return products.json();
      }).then(data => {
      this.setState({
        products: data
      });
    })
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
    const productsCardMap = this.state.products.map((data, i) => {
      return (
        <ProductsCard key={i} handleClickOpen={this.handleClickOpen.bind(this)} data={data}/>
      )
    });
    return (
        <div className="dashboard-container">
          <AppBarDashboard/>
          {productsCardMap}
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
