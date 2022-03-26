import React from "react";

const List = ({
  id,
  title,
  body,
  removeTodo,
  completed,
  completedTodo,
  selectItems,
  selected
}) => {
  const rowStyle = {
    padding: "50px",
    background: "#f5f5f5",
    borderBottom: "2px solid blue",
    textDecoration: selected?"line-through":"none",
    color: selected?"red":"black",
  };
  return (
    <div className="list">
      <div style={rowStyle} className="row">
        <div className="col-sm-1">
          <div className="select">
            <input
              type="checkbox"
              value={id}
              onChange={(e) => selectItems(e,id)}
            />
          </div>
        </div>

        <div className="col-sm-2">
          <div className="title" style={{ color: completed ? "green" : "red" }}>
            {title}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="summery">{body}</div>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success" onClick={() => completedTodo(id)}>
            completed
          </button>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-danger" onClick={() => removeTodo(id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
