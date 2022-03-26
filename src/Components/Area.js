import React from "react";
import List from "./List";
const Area = ({
  todoLists,
  removeTodo,
  completedTodo,
  selectItems,
  removeSelected,
}) => {
  return (
    <div className="area">
      <div className="todoapp">
        <div className="container">
          {todoLists.map(
            ({ id, title, summery, completed, selected }) => {
              return (
                <List
                  key={id}
                  id={id}
                  title={title}
                  body={summery}
                  completed={completed}
                  removeTodo={removeTodo}
                  completedTodo={completedTodo}
                  selectItems={selectItems}
                  selected={selected}
                />
              );
            }
          )}

          <div className="row aligne-items-bottom justify-content-end">
            <div className="col-md-3">
              <button
                className="btn btn-warning"
                onClick={() => removeSelected()}
              >
                remove selected
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
