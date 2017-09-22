import React, {Component} from 'react';

class ShoppingCart extends Component {
    // TOTAL
    formatCurrency(number) {
      var options = { style: 'currency', currency: 'USD' };
      var numberFormat = new Intl.NumberFormat('en-US', options);

      return numberFormat.format(number);
    }

    getTotal() {
      var total = Object.keys(this.props.shoppingCartItems).reduce((previous, key) => {
        return previous + this.props.shoppingCartItems[key].price * this.props.shoppingCartItems[key].quantity;
      }, 0);

      return this.formatCurrency(total);
    }

    render() {
        return (
            <div>
                <h3>SHOPPING CART</h3>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>
                           Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.shoppingCartItems.map((item, index) =>
                            <tr key={item.id}>
                                <td className="text-right">{index + 1}</td>
                                <td className="text-left">{item.name}</td>
                                <td className="text-right">{this.formatCurrency(item.price)}</td>
                                <td className="text-right">
                                    <button onClick={this.props.onDecreaseQuantity.bind(this, item)} className="btn btn-xs btn-warning">-</button>
                                    &nbsp;{item.quantity}&nbsp;
                                    <button onClick={this.props.onIncreaseQuantity.bind(this, item)} className="btn btn-xs btn-warning">+</button>
                                </td>
                                <td className="text-right">{this.formatCurrency(item.price * item.quantity)}</td>
                                <td className="text-right">
                                     <button onClick={this.props.onRemoveCart.bind(this, item)} className="btn btn-xs btn-danger">Remove</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div className="text-right">
                  <h3>TOTAL: { this.getTotal() }</h3>
                </div>
            </div>
        );
    }
}
export default ShoppingCart;
