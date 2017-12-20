import React, { Component } from 'react';
import AppBarDashboard from '../Components/AppBar';
import ProductsCard from '../Components/ProductsCard';

class ProductsPageContainer extends Component {
  render () {
    return (
        <div className="dashboard-container">
          <AppBarDashboard/>
          <ProductsCard/>
          <ProductsCard/>
        </div>
    )
  }
};

export default ProductsPageContainer;
