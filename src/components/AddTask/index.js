import React, { Component } from 'react';
//import './App.css';

class AddTask extends Component {

  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask(e){
    e.preventDefault();

    const titulo = e.target.elements.titulo.value.trim();
    const descripcion = e.target.elements.descripcion.value.trim();

    if(titulo && descripcion){
      console.log(e.target.elements.titulo.value);
      console.log(e.target.elements.descripcion.value);
    }
  }

  render() {
    return (
      <div className="AddTask">
        <form onSubmit={this.addTask}>
            <label>Titulo</label>
            <input type="text" name="titulo"></input>
            <label>Descripcion</label>
            <input type="text" name="descripcion"></input>
            <button>Add task</button>
        </form>
      </div>
    );
  }
}

export default AddTask;