import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../AC'

class Index extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    )
  }
}

export default connect(state => {
    return {
        counter: state.counter.count
    }
}, {increment, decrement})(Index)
