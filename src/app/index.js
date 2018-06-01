import React, { Component } from 'react';
import { Sidebar } from '../sidebar';
import { Content } from '../content';
import { Header } from '../header';
import { headerConnector } from '../header/connector';
import { contentConnector } from '../content/connector';
import { sidebarConnector } from '../sidebar/connector';

import './index.css';

const MyHeader = headerConnector( Header );
const MySidebar = sidebarConnector( Sidebar );
const MyContent = contentConnector( Content );

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <div className="main">
          <MySidebar />
          <MyContent />
        </div>
      </div>
    );
  }
}

export default App;
