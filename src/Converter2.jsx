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
      unit:'c',temp:''
    };
  //  this.onCelsiusChange=this.onCelsiusChange.bind(this);
  //  this.onFahrenheitChange=this.onFahrenheitChange.bind(this);
  this.handleOnChange=this.handleOnChange.bind(this);
  }

  handleOnChange(e,unit){
    this.setState({unit:unit,temp:e});
  }

  render(){

    let unit=this.state.unit;
    const temp=this.state.temp;
    const celcius= unit==='f' ? toCelcius(temp) : temp;
    const fahrenheit= unit==='c' ? toFahrenheit(temp) : temp;

    return(
      <div>
        <TempUnit temp={celcius} handleOnChange={this.handleOnChange} unit='c' />
        <TempUnit temp={fahrenheit} handleOnChange={this.handleOnChange} unit='f' />
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
    console.log('unit:',this.props.unit);
    this.props.handleOnChange(e.target.value,this.props.unit);
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
