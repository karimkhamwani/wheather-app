var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')
var axios = require('axios')
var Weather = React.createClass({
  getInitialState :function(){
    return {
      location:'Karachi',
      temp :83
    }
  },
  handleOnSearch :function(location){
    var that = this
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp
      })
    },function(error){
      alert(error)
    })
  // return axios.get('/user')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // return axios.post('/check', {name:'Maheen',lname:'liaquat'})
  // .then(function (response) {
  //   var {name , lname} = response.data
  //   console.log(name,"from response");
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
    //   this.setState({
    //   location:location,
    //   temp:23
    // })
  },
  render : function(){
    return(
      <div>
      <h3>Weather component</h3>
      <WeatherForm onSearch={this.handleOnSearch}/>
      <WeatherMessage location={this.state.location} temp={this.state.temp}/>
    </div>

    );
  }
})
module.exports = Weather
