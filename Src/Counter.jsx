import React, { Component } from 'react';

//We have to first define the state type
// And ensure that count is always a number
interface CounterState {
  count: number; 
}

//  Defining the class component with type annotations
class Counter extends Component<{}, CounterState> {
    state: CounterState = {
      count: 0, 
      // Initialize count as a number
    };
      //  Typing-safe method to update state and doing exportattion wich doesn't have any effect
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;