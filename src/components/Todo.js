import React from 'react'

function Todo() {
    const bgColor = {
        backgroundColor: '#219dcf'
    }
    const btnStyles = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: '#fff',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        // margin: '4px 2px',
        cursor: 'pointer'
    }
    const centerStyle = {
         width: '30%',
         margin: '0 auto'
    }
    const todoImg = {
        marginBottom: '5px',
         width : '100%'
    }
    return (
        <div>
            <ul style={centerStyle} className="list-group">
                <li style={bgColor} className="list-group-item"><img style={todoImg} src="https://picsum.photos/id/20/200/150" alt="Todo" loading="lazy"></img><button style={btnStyles}>Add Todo</button></li>
                <li className="list-group-item"><input type="checkbox"/> Todo 1</li>
                <li className="list-group-item"><input type="checkbox"/> Todo 2</li>
                <li className="list-group-item"><input type="checkbox"/> Todo 3</li>
                <li className="list-group-item"><input type="checkbox"/> Todo 4</li>
                <li className="list-group-item"><input type="checkbox"/> Todo 5</li>
           </ul>
        </div>
    )
}

export default Todo