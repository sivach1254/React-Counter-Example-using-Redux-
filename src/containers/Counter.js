import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render(){
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>
          {this.props.count}
          </h1>
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.count,
  };
}


export default connect(mapStateToProps)(Counter);