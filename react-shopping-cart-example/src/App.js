import React, {Component} from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        // Dummy data
        var products = [];
        for (var i = 1; i <= 100; i++) {
            products.push({
                id: i,
                name: 'PRODUCT ' + i,
                price: 1000 + i
            });
        }

        this.state = {
            ShoppingCartItems: [],
            Products: products
        };
    }



    onAddToCart(product) {
        var cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        };

        var isExist = false;
        for (var i = 0; i < this.state.ShoppingCartItems.length; i++) {
            if (this.state.ShoppingCartItems[i].id === cartItem.id) {
                this.state.ShoppingCartItems[i].quantity++;
                this.setState(this.state);
                return false;
            }
        }

        if (isExist === false) {
            this.state.ShoppingCartItems.push(cartItem);
            this.setState(this.state);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-8">
                        <ProductList onAddToCart={function (product) {
                            this.onAddToCart(product)
                        }.bind(this)} data={this.state.Products}/>
                    </div>
                    <div className="col-md-4">
                        <ShoppingCart shoppingCartItems = {this.state.ShoppingCartItems}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
