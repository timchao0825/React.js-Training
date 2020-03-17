import React, { Component } from 'react';
import files from './files.json';
import FileNode from './FileNode.js';
import './style.css'

class App extends Component {
  
  render() {
    return (
      <div>
        <FileNode {...files} />
      </div>
    );
  }
}

export default App;