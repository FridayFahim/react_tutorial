import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Components/Title";
import List from "./Components/List";
import AddTodo from "./Components/AddTodo";
const App = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      summery:
        "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      summery:
        "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      summery:
        "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      summery:
        "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosamum",
      summery:
        "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ]);

  let selectedItems = [];

  const removeTodo = (removeId) => {
    let newList = todoLists.filter(({ id }) => id !== removeId);
    setTodoLists(newList);
  };
  const completedTodo = (completeId) => {
    let completeList = todoLists.map((todo) => {
      if (todo.id === completeId) {
        todo.completed = true;
      }
      return todo;
    });
    setTodoLists(completeList);
  };

  const selectItems = (e, id) => {
    if (e.target.checked) {
      selectedItems.push(id);
    }
    if (e.target.checked === false) {
      selectedItems = selectedItems.filter((item) => item !== id);
    }
    console.log(selectedItems);
  };

  function removeSelected() {
    // todoLists.map(lists => {
    //   newList = selectedItems
    // })
  }
  return (
    <Fragment>
      <Title />
      <div className="area">
        <div className="todoapp">
          <div className="container">
            {todoLists.map(({ id, date, title, summery, completed }, index) => {
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
                />
              );
            })}

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
      <AddTodo todoList={todoLists} setTodoList={setTodoLists} />
    </Fragment>
  );
};

export default App;
