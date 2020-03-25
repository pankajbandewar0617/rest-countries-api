import React, { Component } from 'react';
import "../App.css";

class Header extends Component {

    headerStyle = () => {
        return {
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 50px",
            backgroundColor: this.props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            color: this.props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        }
    }

    render() {
        return (
            <div style={this.headerStyle()}>
                <p style={{ fontWeight: "bold" }}>Where in the world?</p>
                <p style={{ fontSize: "16px", }} onClick={this.props.changeMode}><strong>☾</strong> Dark Mode</p>
            </div>
        );
    }
}

export default Header;