import React, { Component } from 'react';
import '../../App.css'
import PropTypes from 'prop-types';

class Task extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.task.titulo}</td>
        <td>{this.props.task.descripcion}</td>
        <td>{this.props.task.estado  ? 'Completado' : 'Sin completar'}</td>
        <td>
            <button {...{
              type      : 'button',
              className : `btn btn-sm ${this.props.task.estado ? 'btn-info ' : 'btn-success'}`,
              onClick   : this.handleChangeStatus.bind(null, this.props.task.titulo),
              
            }} >
              {this.props.task.estado ? 'Undo' : 'Mark as done'}
            </button>
        </td>
        <td><i className="fas fa-trash-alt Task-iconTrash" onClick={this.handleDeleteTask.bind(null, this.props.task.titulo)}></i></td>
      </tr>
    );
  }

  handleDeleteTask = (taskToRemove) => {
    this.props.handleDeleteTask(taskToRemove);
  }

  handleChangeStatus = (taskToChange) => {
    this.props.handleChangeStatus(taskToChange);
  }
  
}

Task.propTypes = {
  task: PropTypes.object,
  state: PropTypes.object,
};

export default Task;