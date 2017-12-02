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
    this.onCelsiusChange=this.onCelsiusChange.bind(this);
    this.onFahrenheitChange=this.onFahrenheitChange.bind(this);
  }

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
  }

  render(){
    return(
      <div>
        <fieldset>
          <legend>Temperature in Celcius</legend>
          <input type='text' value={this.state.celcius} onChange={this.onCelsiusChange} />
        </fieldset>
        <fieldset>
          <legend>Temperature in Fahrenheit</legend>
          <input type='text' value={this.state.fahrenheit} onChange={this.onFahrenheitChange} />
        </fieldset>
      </div>
    )
  }
}


export default Converter;
