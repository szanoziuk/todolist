import React, { Component } from 'react';
import { Header } from '../components/header';
import { headerConnector } from './connectors/header';

class HeaderContainer extends Component {
  render() {
    return(
      <Header {...this.props} />
    );
  }
}

export default headerConnector(HeaderContainer);
