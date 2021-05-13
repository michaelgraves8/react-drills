import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      filteredString: '',
      foods: ['Pizza', 'Burgers', 'Deep Fried Catfish', 'Popcorn', 'Brisket', 'Bacon', 'Dinosaur Chicken Nuggets']
    }
  }

  handelChange(filter) {
    this.setState({ filteredString: filter })
  }

  render(){
    let foodsToDisplay = this.state.foods.filter((element, index) => {
      return (element.includes(this.state.filteredString))
    })
    .map((element, index) => {
      return <h2 key={index}> {element} </h2>
    })

    return (
      <div>
        <input onChange={e => this.handelChange(e.target.value)} type="text" />
        {foodsToDisplay}
      </div>
    )
  }

}

export default App;
