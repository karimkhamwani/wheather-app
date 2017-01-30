var React = require('react')

var About = React.createClass({
  render : function(){
    return(
      <div>
      <h3>About component</h3>
       <span className="label">Regular Label</span>
       <br></br>
       <span className="success alert secondary label">Advanced Label</span>
      </div>

    );
  }
})
module.exports = About
