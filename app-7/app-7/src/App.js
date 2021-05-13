import './App.css';
import {Component} from 'react'
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task){
    this.setState({list: [...this.state.list, task]})
  }

  render(){
    return(
      <div>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.list}/>
      </div>
    )
  }
}

export default App;