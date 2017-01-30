var React = require('react')

var WeatherMessage = React.createClass({
  render : function(){
    var {temp, location} = this.props;
    return(
            <div>
        <div className="panel callout radius">
        <h3>Temperture in {location} is {temp}</h3>
        </div>
      </div>
    );
  }
})
module.exports = WeatherMessage
