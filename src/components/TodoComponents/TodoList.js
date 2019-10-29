// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo'

import React from 'react'

const TodoList = props => {

    return (
        <div className="todolist">
            {props.todo.map(item =>
                <Todo 
                    key={item.id}
                    item={item}
                    toggleDone={props.toggleDone}
                />
                )}
                <button className="clear-btn" onClick={props.clearDone}>
                    Clear Purchased
                </button>
        </div>
    )
}

export default TodoList