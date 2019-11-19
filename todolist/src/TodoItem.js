import React, { Component } from 'react'
import './App.css'

export default class TodoItem extends Component {

    render() {
        const {id, title } = this.props.todo
        return (
            <div className="itemStyle" >
                <p>
                <input 
                type="checkbox" 
                className="input"
                onChange={()=>this.props.markComplete(id)}
                /> {' '}

                { title }
                <button 
                onClick={() => this.props.delTodo(id)}
                className="btnStyle">x</button>
                </p>
            </div>
        )
    }
}


