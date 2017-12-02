import React,{Component} from 'react';

const temp_unit={
  'c':'Celsius','f':'Fahrenheit'
};

function toFahrenheit(temp){
  temp = (temp * 9 / 5) + 32;
  return Math.round(temp * 1000)/1000;
}

function toCelcius(temp){
  temp = (temp - 32) * 5 / 9;
  return Math.round(temp * 1000)/1000;
}

function convert(temp,converter){
  if(temp===''){
    return '';
  }
  return converter(temp);
}

class Converter extends Component{
  constructor(props){
    super(props);
    this.state={
      unit:'c',temp:''
    };
  this.handleOnChange=this.handleOnChange.bind(this);
  }

  handleOnChange(e,unit){
    this.setState({unit:unit,temp:e});
  }

  render(){

    let unit=this.state.unit;
    const temp=this.state.temp;
    const celcius= unit==='f' ? convert(temp,toCelcius) : temp;
    const fahrenheit= unit==='c' ? convert(temp,toFahrenheit) : temp;

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
        <legend>Temperature in {temp_unit[this.props.unit]}</legend>
        <input type='text' value={this.props.temp} onChange={this.handleOnChange} />
      </fieldset>
    )
  }
}

export default Converter;
