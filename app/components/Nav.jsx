var React = require('react')
var {Link,IndexLink} = require('react-router')
var Nav = React.createClass({
  render : function(){
    return (
      <div>
      <h3>Nav bar loaded</h3>
      <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
      <IndexLink to ="/about" activeClassName="active">About</IndexLink>
      <IndexLink to ="/examples" activeClassName="active">Example</IndexLink>
    </div>
    );
  }
})

module.exports = Nav
