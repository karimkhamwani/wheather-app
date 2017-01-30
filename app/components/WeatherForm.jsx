var React = require('react')

var WeatherForm = React.createClass({

    onFormClicked: function(e) {
        e.preventDefault();
        var location = this.refs.location.value
        console.log(location)
        if(location.length >0){
          this.refs.location.value="";
          this.props.onSearch(location)
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormClicked}>
                    <input type="text" ref="location" placeholder="Location"/>
                    <button type="submit" className="button expanded success button">Serach</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm
