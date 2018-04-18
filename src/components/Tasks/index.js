import React, { Component } from 'react';
//import './App.css';
import Task from '../Task';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <h1 className="Tasks-title">{this.props.tasks.length > 0 ? 'Mis tareas!' : 'No hay tareas!'}</h1>
        <button
            className="Task-deleteAllbtn btn btn-danger btn-sm"
            onClick={this.props.handleDeleteAllTask}
            disabled={!this.props.hasTask} >
            Remove all
        </button>
        <div className="table-responsive">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Estado</th>
                      <th>Cambiar estado</th>
                      <th>Eliminar</th>
                  </tr>
              </thead>
              <tbody>
              {
                _.map(this.props.tasks, (task) => <Task 
                                                    key={task.titulo} 
                                                    handleDeleteTask={this.props.handleDeleteTask} 
                                                    task={task} 
                                                    hasTask={this.props.tasks.length > 0}
                                                    handleChangeStatus={this.props.handleChangeStatus}
                                                  />)
              }
              </tbody>
          </table>
        </div>
        <footer>Todos los derechos reservados | Jorge  Gómez</footer>
      </div>
    );
  }
}
Tasks.propTypes = {
  tasks: PropTypes.array,
  handleDeleteTask: PropTypes.func,
  handleChangeStatus: PropTypes.func,
};

export default Tasks;