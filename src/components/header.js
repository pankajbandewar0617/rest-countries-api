import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <p>Where in the world?</p>
                <p onClick={this.props.changeTheme}>☾ Dark Mode</p>
            </div>
        );
    }
}

export default Header;