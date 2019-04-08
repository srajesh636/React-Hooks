import React, { useState } from "react";

let handleOnClick = (props, term) => term.length > 0 && props.getUserTerm({term , id: new Date() });

let Todo = props => {
  const [term, setTerm] = useState("");
  return (
    <div className="container">
      <br />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add task name ...."
          onChange={e => setTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary bg-dark text-white"
            type="button"
            id="button-addon2"
            onClick={() => {
              handleOnClick(props, term);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
