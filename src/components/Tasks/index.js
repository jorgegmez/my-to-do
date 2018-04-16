import React, { Component } from 'react';
//import './App.css';
import Task from '../Task'

class Tasks extends Component {
  render() {
    return (
      <div className="AddTask">
        <Task tasks={this.props.tasks}/>
      </div>
    );
  }
}

export default Tasks;