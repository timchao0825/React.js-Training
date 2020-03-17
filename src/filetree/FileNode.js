import React, { Component } from 'react';

class FileNode extends Component {
  state = {
    open: false,
  }
  toggleOpen = () =>{
    this.setState({
      open:!this.state.open,
    })
  }
  render() {
    const {name, files} = this.props;
    const openFile = this.state.open;
    if(!files){
    return <li>{name}</li>
    }
    return (
      <div>
        <div className={`folder ${openFile ? `open` : null}`} onClick={this.toggleOpen}>{name}</div>
        {
          openFile ?
          <ul>
          {files.map( 
            (file) => (
              <FileNode {...file}/>
            )
          )}
          </ul>
          : null
        }
      </div>
    );
  }
}

export default FileNode;