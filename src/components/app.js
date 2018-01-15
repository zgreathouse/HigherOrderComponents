import React, { Component } from 'react';

import Header from './Header';
import Resources from './Resources';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
