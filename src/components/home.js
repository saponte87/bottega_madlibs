import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">   
          { Header() }
          <Card />
          <h1>Hello</h1>
      </div>
    );
  }
}

export default Home;
