import React from 'react';
import { default as Header } from '../containers/header-container';
import { default as Sidebar } from '../containers/sidebar-container';
import { default as Todos } from '../containers/todos-container';

import './index.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Todos />
      </div>
    </div>
  );
}

export default App;
