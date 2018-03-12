import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Prop number is : {this.props.propNumber}</h3>
        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 'City', 'Audi']
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
      this.setState( {cars: this.state.cars.reverse() });
  }
  render(){
    return(
    <div>
    <h2 onClick={this.handleClick}>Just some info</h2>
    <Cars msg="Cars are cool" bennett="343434" coolCars= {this.state.cars}/>
    </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }

}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}

class Cars extends Component {
  render(){
    console.log(this.props)
    return(
    <div>
    <h3>I am from cars component</h3>
    <p>{this.props.msg}</p>
    <p>{this.props.bennett}</p>
    <div>{this.props.coolCars.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}</div>
    </div>
    );
  }
}

export default App;
