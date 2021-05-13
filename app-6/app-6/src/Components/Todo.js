import {Component} from 'react'

class Todo extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <p> {this.props.task} </p>
            </div>
        )
    }
}

export default Todo