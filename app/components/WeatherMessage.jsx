var React = require('react')

var WeatherMessage = React.createClass({
  render : function(){
    var {temp, location} = this.props;
    return(
      <h3>Location is {location} temperture is {temp}</h3>
    );
  }
})
module.exports = WeatherMessage
