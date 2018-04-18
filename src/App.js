import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Task';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import _ from 'lodash';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks : [],
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
        <AddTask handleAddTask={this.handleAddTask}/>
        <Tasks 
          tasks={this.state.tasks} 
          hasTask={this.state.tasks.length > 0} 
          handleDeleteTask={this.handleDeleteTask}
          handleDeleteAllTask={this.handleDeleteAllTask}
          handleChangeStatus={this.handleChangeStatus}
        />
      </div>
    );
  }

  handleAddTask = (task) => {
    this.setState((prevState) => {
      return {tasks: prevState.tasks.concat([task])}
    });
  }

  handleDeleteTask = (tastToRemove) => {
    this.setState((prevState) => (
      {
        tasks : prevState.tasks.filter((tasks) => tastToRemove  !== tasks.titulo)
      }
    ));
  }

  handleDeleteAllTask = () => {
    this.setState(() => ({ tasks : []}));
  }

  handleChangeStatus = (taskToChange) => {
    const indexToReplace = _.findIndex(this.state.tasks, {titulo : taskToChange});
    const tasks = this.state.tasks;
    tasks[indexToReplace].estado = !tasks[indexToReplace].estado;
    this.setState({tasks});
  }

}

export default App;
