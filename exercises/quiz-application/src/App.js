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
import MainMenu from './components/MainMenu';
import MainSider from './components/MainSider/index';

// PAGES
import Home from './pages/Home';
import About from './pages/About';

const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>

            <Layout>
              <Sider
                trigger={null}
                collapsible
                collapsed={false}
                breakpoint="lg"
                width={256}
              >
                <MainSider></MainSider>
              </Sider>
              <Layout>
                {/* <Header style={{ height: '48px' }}>
                  <Route path="/:id?" component={PageRoute} />
                </Header> */}
                <Content style={{ padding: '24px', height: '100%' }}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </Provider>

    );
  }
}

const PageRoute = ({ match }) => (
  <MainMenu url={match.url} selectedKey={match.url !== '/' ? match.url.replace('/', '') : "home"} />
);


export default App;

