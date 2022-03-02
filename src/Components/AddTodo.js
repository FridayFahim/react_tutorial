import React,{useState} from 'react'

const AddTodo = ({todoList,setTodoList}) => {
    const [todo,setTodo] = useState({
        id:"",
        date:"",
        title:"",
        summery:""
    }) 
 
    function addTodo(e){
       setTodo({...todo,[e.target.name]:e.target.value})
    }
    
    function submitTodo(){
     let id = todoList.length+1;
     let d = new Date();
     let date = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
     todo.id = id
     todo.date = date
    setTodoList([...todoList,todo])
     console.log(todo)
    }
  return (
    <div className='addtodo'>
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
                        >add todo</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo