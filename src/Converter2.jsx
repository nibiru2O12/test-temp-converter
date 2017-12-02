import React,{Component} from 'react';

function toFahrenheit(temp){
  temp = (temp * 9 / 5) + 32;
  return Math.round(temp * 1000)/1000;
}

function toCelcius(temp){
  temp = (temp - 32) * 5 / 9;
  return Math.round(temp * 1000)/1000;
}

class Converter extends Component{
  constructor(props){
    super(props);
    this.state={
      celcius:'',fahrenheit:''
    };
  //  this.onCelsiusChange=this.onCelsiusChange.bind(this);
  //  this.onFahrenheitChange=this.onFahrenheitChange.bind(this);
  this.handleOnChange=this.handleOnChange.bind(this);
  }

  handleOnChange(e,unit){

    switch (unit) {
      case 'c':
          this.setState({
            celcius:e.target.value,
            fahrenheit:toFahrenheit(e.target.value)
          });
        break;
      case 'f':
          this.setState({
            celcius:toCelcius(e.target.value),
            fahrenheit:e.target.value
          });
        break;

      default:
        console.log('invalud unit');
    }

    e.preventDefault();

  }

/*
  onCelsiusChange(e){
    console.log(e.target.value)
    this.setState({
      celcius:e.target.value,
      fahrenheit:toFahrenheit(e.target.value)
    });
    e.preventDefault();
  }

  onFahrenheitChange(e){
    console.log(e.target.value)
    this.setState({
      celcius:toCelcius(e.target.value),
      fahrenheit:e.target.value
    });
    e.preventDefault();
  } */

  render(){
    return(
      <div>
        <TempUnit temp={this.state.celcius} handleOnChange={this.handleOnChange} unit='c' />
        <TempUnit temp={this.state.fahrenheit} handleOnChange={this.handleOnChange} unit='f' />
      </div>
    )
  }
}

class TempUnit extends Component{
  constructor(props){
    super(props);
    this.handleOnChange=this.handleOnChange.bind(this);
  }

  handleOnChange(e){
    this.props.handleOnChange(e,this.props.unit);
    e.preventDefault();
  }

  render(){
    return(
      <fieldset>
        <legend>Temperature in Fahrenheit</legend>
        <input type='text' value={this.props.temp} onChange={this.handleOnChange} />
      </fieldset>
    )
  }
}

export default Converter;
