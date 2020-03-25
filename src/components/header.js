import React, { Component } from 'react';
import "../App.css";


const darkStyle = () => {
    return {
        backgroundColor: "hsl(207, 26%, 17%)",
        darkmodeElement: "hsl(209, 23%, 22%)",
        textColor: "hsl(0, 0%, 100%)",
    }
}

const lightStyle = () => {
    return {
        backgroundColor: "hsl(0, 0%, 98%)",
        lightmodeElement: " hsl(0, 0%, 100%)",
        textColor: " hsl(200, 15%, 8%)",
        LightModeInput: "hsl(0, 0%, 52%)",
    }
}


class Header extends Component {

    changeMode = () => {
        console.log("mode change")
    }
    render() {
        return (
            <div className="header">
                <p style={{ fontWeight: "bold" }}>Where in the world?</p>
                <p style={{ fontSize: "14px", }} onClick={this.changeMode}> Dark Mode</p>
            </div>
        );
    }
}

export default Header;