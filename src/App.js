import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Components/Title";
import Area from "./Components/Area";
import Data from './Data'
import AddTodo from "./Components/AddTodo";
import { list } from "postcss";

const App = () => {
  const [todoLists, setTodoLists] = useState(Data);

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
      let newList = todoLists.map((list) => {
        list.selected = list.id === id ? true : list.selected;
        return list;
      });
      setTodoLists(newList);
    }
    if (e.target.checked === false) {
      let newList = todoLists.map((list) => {
        if (list.id === id) {
          list.selected = false
        }
        return list;
      });
      setTodoLists(newList);
    }
    console.log();
  };

  function removeSelected() {
    setTodoLists(todoLists.filter(list => list.selected !== true))
  }
  return (
    <Fragment>
      <Title />
      <Area
        todoLists={todoLists}
        removeTodo={removeTodo}
        completedTodo={completedTodo}
        selectItems={selectItems}
      />
      <AddTodo todoList={todoLists} setTodoList={setTodoLists} />
    </Fragment>
  );
};

export default App;
