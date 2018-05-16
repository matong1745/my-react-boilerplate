import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setParameter } from '../../../../redux/parameter/action';
class Parameter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span onClick={() => this.props.setParams(this.props.match.params.id)}>
          Parameter {this.props.parameter}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  parameter: state.parameter.parameterId
});
const mapDispatchToProps = { setParams: setParameter };

export default connect(mapStateToProps, mapDispatchToProps)(Parameter);
