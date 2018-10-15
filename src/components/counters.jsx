import React, { Component } from "react"; // imrc
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onDelete,
      onIncrement,
      onDecrement,
      onReset,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(c => (
          <Counter
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
