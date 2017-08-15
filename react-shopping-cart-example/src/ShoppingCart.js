import React, {Component} from 'react';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <h1>SHOPPING CART</h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.shoppingCartItems.map(item =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="text-left">{item.name}</td>
                                <td className="text-right">{item.price}</td>
                                <td className="text-right">{item.quantity}</td>
                                <td className="text-right">{item.price * item.quantity}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ShoppingCart;