import React, {Component} from 'react';

class ProductList extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.data.map(p => <Product onAddToCart={function(e){this.props.onAddToCart(e)}.bind(this)} key={p.id} product={p}/>)}
      </div>
    );
  }

}

class Product extends Component {
  constructor(props) {
    super(props);
    //this.onAddToCart = this.onAddToCart.bind(this);
  }

  // onAddToCart() {
  //   console.log(this.props.product.id);
  // }
  render() {
    return (
      <div className='col-md-4'>
        <img alt="" src='http://via.placeholder.com/300x300'/>
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.price}</p>
        <p>
          <button className="btn btn-danger" onClick={function(e){this.props.onAddToCart(this.props.product.id);}.bind(this)}>Add to cart</button>
        </p>
      </div>
    );
  }

}
export default ProductList;
