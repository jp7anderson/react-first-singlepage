import React, { Component } from 'react';
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <nav className="navbar navbar-default">
                        <div className="collapse navbar-collapse">
                            <ul className='nav navbar-nav'>
                                <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
                                <li><Link to='/stuff' activeClassName='active'>Stuff</Link></li>
                                <li><Link to='/contact' activeClassName='active'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className='content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
