import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    summery: "",
    selected: false,
    completed:false
  });

  function addTodo(e) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  function submitTodo() {
    todo.id = uuidv4();
    setTodoList([...todoList, todo]);
  }
  return (
    <div className="addtodo">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br />
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="floatingInput"
                  placeholder="write a title"
                  onChange={(e) => addTodo(e)}
                />
                <label htmlFor="floatingInput">Title</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="write a description"
                  name="summery"
                  onChange={(e) => addTodo(e)}
                />
                <label htmlFor="floatingPassword">description</label>
              </div>
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => submitTodo()}
              >
                add todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
