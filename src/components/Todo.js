import React from 'react'

class Todo extends React.Component {

    render() {
        const bgColor = {
            backgroundColor: '#219dcf'
        }
        // const btnStyles = {
        //     backgroundColor: '#4CAF50',
        //     border: 'none',
        //     color: '#fff',
        //     padding: '15px 32px',
        //     textAlign: 'center',
        //     textDecoration: 'none',
        //     display: 'inline-block',
        //     fontSize: '16px',
        //     // margin: '4px 2px',
        //     cursor: 'pointer'
        // }
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
                    <div style={bgColor} className="mt-2">
                        <img style={todoImg} src="https://picsum.photos/id/20/200/150" alt="Todo" loading="lazy"></img>
                        <input type="text" name="todo" style={inputStyle} placeholder="Add todo" />
                        <button><i className="fas fa-paper-plane fa-2x"></i></button>
                    </div>
                {/* <li style={bgColor} className="list-group-item"></li> */}
                    <li className="list-group-item"><input type="checkbox"/> Todo 1</li>
                    <li className="list-group-item"><input type="checkbox"/> Todo 2</li>
                    <li className="list-group-item"><input type="checkbox"/> Todo 3</li>
                    <li className="list-group-item"><input type="checkbox"/> Todo 4</li>
                    <li className="list-group-item"><input type="checkbox"/> Todo 5</li>
                 </ul>
            </React.Fragment>

            
    )
}

}
export default Todo