import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import "./css/app.css"
import {fetchData} from "./api/api"
import covid from "./img/Coronavirus_3D_illustration_by_CDC_1600x900-removebg-preview.png";

class App extends React.Component {
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange =async(country)=>{
    const fetchedData=await fetchData(country);

    this.setState({data:fetchedData,country:country})
  }

  render (){

    return(
    <div className="app">
      <h1>COVID 19 Tracker<img src={covid} alt="covid"/></h1>
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/> 
    </div>
  );
  }
}

export default App;
