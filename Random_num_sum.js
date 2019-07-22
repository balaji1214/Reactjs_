import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<textbox />, document.getElementById('root'));
class Calc extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
   {
      num1: 0,
      num2: 0,
      answer: "Result:"
   };
    this.setRandomNumber = this.setRandomNumber.bind(this);
    this.genRnad = this.genRnad.bind(this);
    this.calc = this.calc.bind(this);
  }

  componentWillMount() {
    this.setRandomNumber();
  }

  setRandomNumber() {
    this.setState({
      num1: this.genRnad(),
      num2: this.genRnad(),
      answer: "?"
    });
  }

  genRnad() {
    return Math.floor(Math.random() * 11);
  }

  calc() {
    this.setState({
      answer: this.state.num1 + this.state.num2
    });
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="q">
            <span ref="num1">{this.state.num1}</span>
            <span style={{minWidth: "40px"}}>+</span>
            <span ref="num2">{this.state.num2}</span>
            <button onClick={this.calc} className="btn" id="equal">=</button>
            <span id="answer">{this.state.answer}</span>
          </div>
          <div>
            <button onClick={this.setRandomNumber} className="btn" id="reset">
              &#8635; reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calc />, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
