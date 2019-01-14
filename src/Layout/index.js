import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Site from './Site';
import Header from '../Header';
import Content from './Content';
import Footer from '../Footer';

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    height: 100%;
    background: #fff;
    color: #000;
    font-size: 16px;
    margin: 0;
    font-family: 'Catamaran', sans-serif;
  }

  #root {
    height: 100%;
  }

  p {
    margin: 0;
  }
`;

class Layout extends Component {
  render() {
    return (
      <Site>
        <GlobalStyle />
        <Header />
        <Content>{this.props.children}</Content>
        <Footer />
      </Site>
    );
  }
}

export default Layout;
