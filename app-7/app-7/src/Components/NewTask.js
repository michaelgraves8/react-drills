import {Component} from 'react'

class NewTask extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInput(value) {
        this.setState({input: value})
    }

    handleAdd(){
        this.props.add(this.state.input)
        this.setState({input: ''})
    }

    render(){
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

            </div>
        )
    }
}

export default NewTask