import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './components/TodoComponents/Todo.css'

const data = [
  {
    name: "Welcome to my Todo List! Use the above form to create new items, and when you are done with them just click on them and press the button below. Enjoy :D",
    id: 2,
    done: false
  },
  {
    name: "Make dinner",
    id: 1,
    done: true
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

  clearDone = () => {
    this.setState({
      todo: this.state.todo.filter( item => !item.done )
    })
    console.log("Clear button pressed")
  }

 
  render() {
    return (
      <div>
        <div className="intro">
          <h2>The best Todo List on the internet</h2>
        </div>
        <TodoForm addItem={this.addItem} />

        <TodoList todo={this.state.todo} toggleDone={this.toggleDone}
        clearDone={this.clearDone}
/>
      </div>
    );
  }
}

export default App;
