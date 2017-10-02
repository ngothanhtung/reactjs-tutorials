import React, {Component} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Footer from './Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // Dummy data
        var products = [];
        for (var i = 1; i <= 60; i++) {
            products.push({
                id: i,
                name: 'PRODUCT ' + i,
                price: 1000 + i * 100
            });
        }

        this.state = {
            ShoppingCartItems: [],
            Products: products
        };
    }

    onRemoveCart(item) {
        var items = this.state.ShoppingCartItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === item.id) {
                items.splice(i, 1);
                this.setState({ShoppingCartItems: items});
                return false;
            }
        }
    }

    onIncreaseQuantity(item) {
        var items = this.state.ShoppingCartItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === item.id) {
                items[i].quantity++;
                this.setState({ShoppingCartItems: items});
                return false;
            }
        }
    }

    onDecreaseQuatity(item) {
        if (item.quantity === 1) return;
        var items = this.state.ShoppingCartItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === item.id) {
                items[i].quantity--;
                this.setState({ShoppingCartItems: items});
                return false;
            }
        }
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
                <Header />
                <div className="row">
                    <div className="col-sm-6">
                        <ProductList
                            onAddToCart={function (product) {
                                this.onAddToCart(product)
                            }.bind(this)}
                            products={this.state.Products}
                        />
                    </div>
                    <div className="col-sm-6">
                        <ShoppingCart
                            onIncreaseQuantity={function(item) {
                                this.onIncreaseQuantity(item)
                            }.bind(this)}

                            onDecreaseQuantity={function(item) {
                                this.onDecreaseQuatity(item)
                            }.bind(this)}

                            onRemoveCart={function(item) {
                                this.onRemoveCart(item)
                            }.bind(this)}

                            shoppingCartItems = {this.state.ShoppingCartItems}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
