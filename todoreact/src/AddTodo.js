import React, { Component } from 'react'
import  './App.css'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => {
        this.setState({title: e.target.value});
    }


    render() {
        return (
            
            <form onSubmit={this.onSubmit} >
                <input type="text"
                name="title"
                value={this.state.title}
                className="input"
                placeholder="Add Todo..."
                onChange={this.onChange}
                />

                <input type="submit"
                value="Submit"
                className="btnStyle"
                onSubmit={this.onSubmit}
                />

            </form>
           
        )
    }
}