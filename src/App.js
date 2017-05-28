import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleOnClickItems() {
    this.props.store.dispatch({type: 'GET_COUNT_OF_ITEMS'})
  }

  handleOnClickUsers() {
    this.props.store.dispatch({type: 'GET_COUNT_OF_USERS'})
  }

  render() {
    return (
      <div className="App">
          <button onClick={this.handleOnClickItems.bind(this)}>Click to change items count</button>
          <button onClick={this.handleOnClickUsers.bind(this)}>Click to change user count</button>
          <p> {this.props.items.length}</p>
          <p> {this.props.users.length}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    users: state.users
  }
}

export default connect(mapStateToProps)(App);
