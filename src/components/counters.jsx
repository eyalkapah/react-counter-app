import React, { Component } from "react"; // imrc
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, counters } = this.props;
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
            counter={c}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
