var React = require('react')
var {Link, IndexLink} = require('react-router')
var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                      <li class="menu-text">React Application</li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active">About</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/examples" activeClassName="active">Example</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right"></div>
            </div>
        );
    }
})

module.exports = Nav;
