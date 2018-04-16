import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Task';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

class App extends Component {

  constructor(props){
    super(props);
    this.AddTask = this.AddTask.bind(this);
    this.state = {
      titulo : '',
      descripcion : '',
      tasks : [
        {titulo: 'Title 1', descripcion: 'Descripcion 1'},
        {titulo: 'Title 2', descripcion: 'Descripcion 2'},
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>My to-do list</h2>
        </header>
        <AddTask addTask={this.AddTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }

  AddTask = (task) => {
    this.setState((prevState) => {
      return (
        {
          tasks : prevState.concat(task)
        }
      )
    });
  }


}



export default App;
