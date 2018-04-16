import React, { Component } from 'react';
//import './App.css';

class AddTask extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.addTask.bind(this);
    this.state = {
      titulo : '',
      descripcion : ''
    };
  }

  handleSubmits(e){

    e.preventDefault();

    if(titulo && descripcion){
      console.log(e.target.elements.titulo.value);
      console.log(e.target.elements.descripcion.value);
      this.props.addTask();
      
    }
  }

  handleChange(e){
    const tituloNuevo = e.target.elements.titulo.value.trim();
    const descripcionNuevo = e.target.elements.descripcion.value.trim();

    this.setState(() => {
      return {
        titulo : tituloNuevo,
        descripcion : descripcionNuevo
      }
    });
  }

  render() {
    return (
      <div className="AddTask">
        <form onSubmit={this.handleSubmit}>
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