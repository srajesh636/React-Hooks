import React from "react";

export default function List(props) {
  let todos = props.todos;
  return (
    <React.Fragment>
      {props.todos &&
        props.todos.map(i => {
          return (
            <div className="container mt-3 mb-2">
              <div className="list-group-item list-group-item-action">
                <div className="d-flex w-100">
                  <h5 className="mb-1" style={{ flex: 8 }}>
                    {i.term}
                  </h5>
                  <span
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "space-evenly"
                    }}
                  >
                    <small>
                      <i className="fas fa-check" />
                    </small>
                    <small>
                      <i className="fas fa-trash-alt" />
                    </small>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}
