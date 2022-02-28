import React from 'react'

const Title = () => {
    const titleStyle = {
      background:"#272727",
      color:"#f9f9f9",
      textTransfrom:"uppercase"
  }
  
  return (
    <div className="title">
        <div className="container">
            <div style={titleStyle} className="row justify-content-center align-items-center">
                <div className="col-sm-6 text-center">
                    <h1>todo list</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Title