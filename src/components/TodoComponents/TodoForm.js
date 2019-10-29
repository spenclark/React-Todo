import React, {useState } from 'react'

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        newItem: "",
      };
    }  

    handleChange = e => {
        this.setState({
            newItem: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: "" });
    }
    render() {
    return (
        <>
            <form onSubmit={this.handleSubmit}>
                <label>New Todo</label>
                <input 
                    type="text"
                    name="item"
                    id="item"
                    value={this.state.newItem}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        </>
    )
    }
}
export default TodoForm