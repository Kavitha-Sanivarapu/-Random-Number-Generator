// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNumber = Math.floor(Math.random() * 100)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="display-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
