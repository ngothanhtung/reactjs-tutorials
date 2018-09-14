import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import LoginName from '../../components/LoginName';
import ScoreBadge from '../ScoreBadge';
import Clock from '../Clock';

const { Header, Footer, Content } = Layout;

export default class MainHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: '#ffffff', padding: 0 }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <div>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => {
                this.props.onIconClick();
              }}
            />
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', paddingRight: 20 }}>
            <Clock />
            <ScoreBadge />
            <LoginName />
          </div>
        </div>
      </Header>
    );
  }
}
