import React, { useState } from "react";

export class ClassyCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{date.toDateString()}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default function FunkyCounter() {
  const [count, setCount] = useState(5);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <span>{date.toDateString()}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}
