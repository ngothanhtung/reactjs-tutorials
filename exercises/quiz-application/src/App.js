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
import MainHeader from './components/MainHeader';
// PAGES
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import FinishPage from './pages/FinishPage';



const { Header, Footer, Content } = Layout;

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
          <Layout style={{ minHeight: '100vh' }}>
            <MainSider collapsed={this.state.collapsed}></MainSider>
            <Layout>
              <MainHeader collapsed={this.state.collapsed} onIconClick={() => {
                this.setState({
                  collapsed: !this.state.collapsed,
                });
              }} />
              <Content style={{ padding: 24, display: 'flex', flex: 1 }}>
                <div style={{ backgroundColor: 'white', padding: 24, flex: 1 }}>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/finish" component={FinishPage} />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                AMES ENGLISH ©2018 Created by Softech Corporation
            </Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;

