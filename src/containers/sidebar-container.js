import React, { Component } from 'react';
import { Sidebar } from '../components/sidebar';
import { sidebarConnector } from './connectors/sidebar';

class SidebarContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return(
      <Sidebar {...this.props} />
    );
  }
}

export default sidebarConnector( SidebarContainer );
