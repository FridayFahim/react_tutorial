import React,{Fragment, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Title from './Components/Title'
import List from './Components/List'
import AddTodo from './Components/AddTodo'
const App = () => {

  const [todoLists,setTodoLists] = useState([])

  return (
      <Fragment>
    <Title/>
    <div className="area">
        <div className="todoapp">
            <div className="container">
               {todoLists.map(({id,date,title,summery},index) => {
                    return <List 
                    key={id}
                    id={id}
                    date={date}
                    title={title}
                    body={summery}
                    />
               })}
            </div>
        </div>
    </div>
    <AddTodo todoList={todoLists} setTodoList={setTodoLists}/>
    </Fragment>
  )
}

export default App