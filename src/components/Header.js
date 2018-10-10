import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return (  
            <header className="bg-secondary text-light container-fluid text-center">
                <div className="jumbotron container bg-secondary">
                    <h1>Web Study 2018-09</h1>
                    <h2>https://csslick.github.io/web0809r/</h2>
                    <h2>http://192.168.0.114</h2>
                </div>
            </header>           
        );
    }
}
 
export default Header;