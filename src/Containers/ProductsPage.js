import React, { Component } from 'react';
import AppBarDashboard from '../Components/AppBar';
import ProductsCard from '../Components/ProductsCard';
import ProductsUserSettings from '../Components/ProductsUserSettings';
import ItemDrawer from '../Components/ItemDrawer';

class ProductsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      notify: false,
      products: [],
      drawerOpen: false
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
  /*DRAWER SECTION*/
  // TODO Missing to implement that when clicking clear button in the item drawer, the checkbox clears out.
  toggleItemDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
  handleCheckboxChange() {
    this.setState({
      drawerOpen:true
    })
  }
  handleClearClick() {
    this.setState({
      drawerOpen:false
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
        <ProductsCard
          key={i}
          handleClickOpen={this.handleClickOpen.bind(this)}
          data={data} handleCheckboxChange={this.handleCheckboxChange.bind(this)}/>
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
            <ItemDrawer drawerOpen={this.state.drawerOpen} handleClearClick={this.handleClearClick.bind(this)}/>
        </div>
    )
  }
}

export default ProductsPageContainer;
