import React, { Component } from 'react';
import Layout from './Layout';
import ColourPicker from './ColourPicker';

class App extends Component {
  render() {
    return (
      <Layout>
        <ColourPicker />
      </Layout>
    );
  }
}

export default App;
