import React, { Component } from 'react';
import { ThemeContext } from '../context/themeContext';
import { Col, Row } from 'antd';

class Header extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, toggleTheme } = this.context;
    const theme = isLightTheme ? 'light' : 'dark';
    return (
      <Row className={`header-${theme}`} justify="space-between">
        <Col span={21.5}>Where in the world?</Col>
        <Col span={2.5} onClick={toggleTheme}>
          ☾ Dark Mode
        </Col>
      </Row>
    );
  }
}

export default Header;
