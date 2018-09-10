import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Icon } from 'antd';


import { Provider } from 'react-redux';
import './App.css';
// REDUX STORE
import store from './configs/store';

// APPS
// import Login from './containers/loginContainer';
// import LoginName from './containers/loginNameContainer';
import MainSider from './components/MainSider';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import LoginName from './components/LoginName';


const { Header, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <MainSider collapsed={this.state.collapsed}></MainSider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <div className="header">
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={() => {
                      this.setState({
                        collapsed: !this.state.collapsed,
                      });
                    }}
                  />
                  <div style={{ float: 'right', paddingRight: 24 }}>
                    <LoginName />
                  </div>
                </div>
              </Header>
              <Content style={{ padding: 24, height: '100%' }}>
                <div style={{ backgroundColor: 'white', padding: 24 }}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                </div>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </Provider>

    );
  }
}

export default App;

