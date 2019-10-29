import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './components/TodoComponents/Todo.css'

const data = [
  {
    name: "Welcome to my Todo List!",
    id: 1,
    done: false
  },

]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: data
    }
  }

  addItem = name => {

    const newItem = {
      name: name,
      id: Date.now(),
      done: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  toggleDone = id => {
    
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return {
          ...item,
          done: !item.done
          }
        } else {
          return item;
        }

      })
    })
  }


 
  render() {
    return (
      <div>
        <TodoForm addItem={this.addItem} />

        <TodoList todo={this.state.todo} toggleDone={this.toggleDone}
/>
      </div>
    );
  }
}

export default App;
