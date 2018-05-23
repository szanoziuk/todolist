import React, { Component } from 'react';
import { Sidebar } from '../sidebar';
import { Content } from '../content';
import { Header } from '../header';
import { omit, map } from 'lodash';
import { Switch, Route } from 'react-router-dom';
import { headerConnector } from '../header/connector';

import './index.css';

const MyHeader = headerConnector( Header );

const todos = {
  1: { id: 1, text: 'Learn React', done: true, categoryId: 1 },
  2: { id: 2, text: 'Learn Router', done: false, categoryId: 2 },
  3: { id: 3, text: 'Learn Redux', done: false, categoryId: 1 },
  4: { id: 4, text: 'Learn Redux', done: false, categoryId: 3 }
}

const categories = {
  1: { id: 1, text: 'Learn React', parentId: null },
  2: { id: 2, text: 'Learn Router', parentId: 1 },
  3: { id: 3, text: 'Learn Redux', parentId: 2 },
  4: { id: 4, text: 'Learn Redux Saga', parentId: 3 },
  5: { id: 5, text: 'Learn lodash', parentId: null }
}

class App extends Component {
  state = {
    todos,
    categories,
    selectedCat: 1
}

  toggleDone = (id) => {
    const updatedItem = this.state.todos;
    updatedItem[id].done = !this.state.todos[id].done;

    this.setState({
        todos: updatedItem
    });
  }

  saveText = (id, text) => {
    const updatedItem = this.state.todos;
    updatedItem[id].text = text;

    this.setState({
      todos: Object.assign({}, this.state.todos, updatedItem)
    });
  }

  itemDelete = (id) => {
    let updatedItem = this.state.todos;
    updatedItem = omit( updatedItem, [`${id}`] );
    this.setState({
      todos: updatedItem
    });
  }

  addItem = ( text ) => {
    const id = Object.keys( this.state.todos ).length + 1;
    const catId = this.state.selectedCat;
    const obj = {};
    obj[id] = { id: id, text: text, done: false, categoryId: catId };
    this.setState({
      todos: Object.assign({}, this.state.todos, obj)
    });
  }

  selectCatId = ( id ) => {
    this.setState({
      selectedCat: id
    });
  }

  render() {

    const extraProps = {
      todos: this.state.todos,
      toggleDone: this.toggleDone,
      saveText: this.saveText,
      itemDelete: this.itemDelete,
      addItem: this.addItem,
    }

    return (
      <div className="App">
        {/* <Header
          todos={ this.state.todos }
        /> */}
        <MyHeader />
        <div className="main">
          <Sidebar
            categories={ this.state.categories }
            selectCatId={ this.selectCatId }
            todos={ this.state.todos }
            categoryId={ this.state.selectedCat }
          />
          <Switch>
            {
              map( categories, el => {
                return(
                  <Route
                    key={ el.id }
                    path={`/:${el.id}`}
                    render={ props => <Content {...extraProps} {...props} /> }
                  />
              )})
            }
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
