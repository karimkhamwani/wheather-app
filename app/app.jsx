var React = require('react')
var ReactDOM = require('react-dom')
var {Route , Router,IndexRoute, hashHistory} = require('react-router')
var Main = require('./components/Main')
var Weather = require('Weather')
var About = require('About')
var Example = require('Example')
//c4e735ea8bd7e7b6dc8368c752517b2d
//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Example}/>
      <IndexRoute component={Weather}/>

    </Route>
  </Router>,document.getElementById('app')
)
