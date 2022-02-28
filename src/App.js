import React,{Fragment, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Title from './Components/Title'
import List from './Components/List'
const App = () => {

  const [todoLists,setTodoLists] = useState([
      {
          id:"1",
          date:"28/02/2022",
          title:"coding",
          summery:"Compiled and minified CSS, JavaScript, and fonts. No docs or"
      },
      {
          id:"2",
          date:"02/02/2022",
          title:"cycling",
          summery:"ctg to cox's bazar"
      },
      {
          id:"3",
          date:"08/02/2022",
          title:"class",
          summery:"thursday math 9 pm"
      }
  ])

  return (
      <Fragment>
    <Title/>
    <div className="area">
        <div className="todoapp">
            <div className="container">
               {todoLists.map(({id,date,title,summery},index) => {
                    return <List 
                    id={id}
                    date={date}
                    title={title}
                    body={summery}
                    />
               })}
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default App