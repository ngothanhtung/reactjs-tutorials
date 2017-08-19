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
                <h1>SHOPPING CART</h1>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>
                           
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.shoppingCartItems.map(item =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="text-left">{item.name}</td>
                                <td className="text-right">{this.formatCurrency(item.price)}</td>
                                <td className="text-right">{item.quantity}</td>
                                <td className="text-right">{this.formatCurrency(item.price * item.quantity)}</td>
                                <td className="text-right">
                                     <button onClick={this.props.onRemoveCart.bind(this, item)} className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div>
                  <h1>TOTAL: { this.getTotal() }</h1>
                </div>
            </div>
        );
    }
}
export default ShoppingCart;
