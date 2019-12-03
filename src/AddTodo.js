import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
        // console.log(e.target.value)

    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)

        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })


        // console.log(this.props.todos)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} required />
                    <button type="submit" >ADD</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;