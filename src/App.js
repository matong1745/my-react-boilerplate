import React, { Component } from 'react';
export default class App extends Component {
  render() {
    return (
      <div>
        HI
        <img src={require('assets/img/test.jpg')} />
      </div>
    );
  }
}
