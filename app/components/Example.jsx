var React = require('react')
var {Link} = require('react-router')
var Example = React.createClass({
  render : function(){
    return(
      <div>
      <h1 className="text-center">Examples</h1>
      <p> Here are few examples </p>
      <ol>
        <li>
          <Link to='/?>location=karachi'> Karachi</Link>
        </li>
        <li>
          <Link to='/?>location=Lahore'> Lahore</Link>
        </li>
      </ol>
      </div>
    );
  }
})
module.exports = Example
