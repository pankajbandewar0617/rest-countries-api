import React, { Component } from 'react';

class Header extends Component {

    headerStyle = () => {
        return {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "hsl(209, 23%, 22%)",
            padding: "0px 30px"
        }
    }

    changeMode = () => {
        console.log("mode change")
    }
    render() {
        return (
            <div style={this.headerStyle()}>
                <p style={{ fontWeight: "bold" }}>Where in the world?</p>
                <p style={{ fontSize: "14px", }} onClick={this.changeMode}> Dark Mode</p>
            </div>
        );
    }
}

export default Header;