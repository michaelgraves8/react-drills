import './App.css';
import {Component} from 'react'
import Todo from './Components/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleInput(value) {
    this.setState({input: value})
  }

  handleAdd(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>
    })

    return(
      <div>

        <input 
        value={this.state.input}
        onChange={e => this.handleInput(e.target.value)}
        placeholder='Enter New Task'
        />

        <button
        onClick={this.handleAdd}
        >
          Add Item
        </button>

        {list}

      </div>
    )
  }
}

export default App;
