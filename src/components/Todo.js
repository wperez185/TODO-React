import React from 'react'

class Todo extends React.Component {

    render() {
        const bgColor = {
            backgroundColor: '#219dcf'
        }
        const todoStyles = {
            border: '10px double rgba(0,0,0,.125)',
            fontSize: '16px',
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

        return (
            <React.Fragment>
                <ul style={centerStyle} className="list-group">
                    <div style={bgColor} className="input-group mt-2">
                        <img style={todoImg} src="https://picsum.photos/id/20/200/150" alt="Todo" loading="lazy"></img>
                        <input type="text" name="todo" style={inputStyle} placeholder="Add todo" />
                        <span class="input-group-btn">
                        <button className="btn btn-secondary"><i className="fas fa-paper-plane fa-2x"></i></button>
                        </span>
                    </div>
                {/* <li style={bgColor} className="list-group-item"></li> */}
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 1 <span className="ml-3"></span><i className="fas fa-trash-alt"></i></li>
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 2</li>
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 3</li>
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 4</li>
                    <li style={todoStyles} className="list-group-item"><input type="checkbox"/> Todo 5</li>
                 </ul>
            </React.Fragment>

            
    )
}

}
export default Todo