import React, {useState} from 'react'

function Todo() {
// make stlye checkbox
        const bgColor = {
            backgroundColor: '#219dcf'
        }
        const todoStyles = {
            border: '10px double rgba(0,0,0,.125)',
            fontSize: '16px'
        }
        const centerStyle = {
             width: '30%',
             margin: '0 auto'
        }
        const todoImg = {
            marginBottom: '5px',
            width : '100%'
        } 
        const inputStyle = {
            border: '5px solid white', 
            padding: '5px',
            margin: '5px'
        }
        const completedTodosStyles = {
            border: '10px double rgba(0,0,0,.125)',
            fontSize: '16px',
            textDecoration: 'line-through'
        }

        const [checked, setChecked] = useState(false)
      
        const todoStatus = () => setChecked(!checked)



        return (
            <React.Fragment>
                <ul style={centerStyle} className="list-group">
                    <div style={bgColor} className="input-group mt-2">
                        <img style={todoImg} src="https://picsum.photos/id/20/200/150" alt="Todo" loading="lazy"></img>
                        <input type="text" name="todo" style={inputStyle} placeholder="Add todo"/>
                        <span className="input-group-btn">
                        <button className="btn btn-secondary"><i className="fas fa-paper-plane fa-2x"></i></button>
                        </span>
                    </div>

                { !checked ? 
                     <li style={todoStyles} className="list-group-item"><input type="checkbox" name="todoResult" onChange={todoStatus} checked={checked}/> Todo 1 </li> 
                : 
                     <li style={completedTodosStyles} className="list-group-item"><input type="checkbox" name="todoResult" onChange={todoStatus} checked={checked}/> Todo 1 <button className="ml-3 bg-danger border-0"><i className="fas fa-trash-alt text-white"></i></button></li> 
                }

                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 2</li>
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 3</li>
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 4</li>
                 </ul>
            </React.Fragment>

            
    )

}
export default Todo