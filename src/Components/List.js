import React from 'react'

const List = ({id,date,title,body}) => {

      const rowStyle = {
      padding:"50px",
      background:"#f5f5f5",
      borderBottom:"2px solid blue"
  }
  return (
    <div className="list">
                    <div style={rowStyle} className="row">
                        <div className="col-sm-1">
                            <div className="select">
                                <input type="checkbox" name="" id={id} />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="date">
                               {date}
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="title">
                                {title}
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="summery">
                               {body}
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <button className="btn btn-danger">remove</button>
                        </div>
                    </div>
                </div>
  )
}

export default List