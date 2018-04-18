import React, { Component } from 'react';
import '../../App.css'
import _ from 'lodash';


class AddTask extends Component {

  constructor(props){
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      titulo : '',
      descripcion : '',
    };
  }

  render() {
    return (
      <div className="AddTask-form">
        <div className="container AddTask-container">
          <form>
              <div className="form-group">
                <label>Titulo: </label>
                <input className="form-control" type="text" name="titulo" value={this.state.titulo} onChange={this.handleTextChange}/>
                <small className="form-text text-muted">Este campo es requerido!.</small>
              </div>
              <div>
                <label>Descripcion: </label>
                <input className="form-control" type="text" name="descripcion" value={this.state.descripcion} onChange={this.handleTextChange}/>
                <small className="form-text text-muted">Este campo es requerido!.</small>
              </div>
              <button type="button" className="btn btn-primary AddTask-button btn-sm" onClick={this.handleAddTask}>Add task</button>
          </form>
        </div>
      </div>
    );
  }

  handleAddTask () {
    if (!_.isEmpty(this.state.titulo) && !_.isEmpty(this.state.descripcion)) {
      const taskObj = {
        titulo : this.state.titulo,
        descripcion : this.state.descripcion,
        estado : false,
      }
      this.props.handleAddTask(taskObj);
      this.setState(() => (
        {
          titulo : '',
          descripcion : '',
        }
      )); 
    }
  }

  handleTextChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }
}

export default AddTask;