import React, { Component } from 'react';

export default class Parameter extends Component {
  render() {
    return <div>Parameter {this.props.match.params.id}</div>;
  }
}
