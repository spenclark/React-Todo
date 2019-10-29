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
        <div className="formDiv">
            <form onSubmit={this.handleSubmit}>
                <label>Add an Item: </label>
                <br/>
                <input 
                    type="text"
                    name="item"
                    id="item"
                    placeholder="Fix the sink"
                    value={this.state.newItem}
                    onChange={this.handleChange}
                />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
    }
}
export default TodoForm