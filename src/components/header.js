import React, { Component } from 'react';

class Header extends Component {

    headerStyle = () => {
        return {

        }
    }

    render() {
        return (
            <div className="header">
                <p>Where in the world?</p>
                <p onClick={this.props.changeMode}>☾ Dark Mode</p>
            </div>
        );
    }
}

export default Header;