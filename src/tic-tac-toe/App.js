import React, { Component } from "react";

import style from "./style.module.scss";

const toSymbol = (n) => {
  switch (n) {
    case 0:
      return '';
    case 1:
      return 'O';
    case -1:
      return 'X';
    default:
      return 'X';
  }
};

// 0 1 2
// 3 4 5
// 6 7 8
const winnerLines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6],
]

class App extends Component {
  state = {
    grid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player:1,
    winner:0,
  };
  
  componentDidUpdate(prevProps, prevState){
    if(prevState.grid !== this.state.grid){
      this.setState({
        winner: this.getWinner(),
      })
    }
  }
  
  handleClick = (idx) => {
    if(this.state.winner !== 0) return;
    const grids = [...this.state.grid];
    if(grids[idx] !==0) return;
    grids[idx] = this.state.player;
    this.setState({
      grid:grids,
      player: -this.state.player,
    })
  }
  
  getWinner = () => {
    const {grid} = this.state;
    for (let i = 0; i < winnerLines.length; i++) {
      const [x,y,z] = winnerLines[i];
      console.log('x ==> ' + x);
      console.log('y ==> ' + y);
      console.log('z ==> ' + z);
      console.log('grid x ==>' + grid[x]);
      console.log('grid y ==>' + grid[y]);
      console.log('grid z ==>' + grid[z]);
      if(grid[x] === grid[y] && grid[y] === grid[z]){
        return grid[x];
      }
    }
    
    // for(const line of winnerLines){
    //   const [x,y,z] = line;
    //   if(grid[x] === grid[y] && grid[y] === grid[z]){
    //     console.log('winner');
    //     return grid[x];
    //   }
    // }
    return 0;
  }

  gameReset = () => {
    this.setState({
      grid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player:1,
    })
  }
  render() {
    const { grid , player , winner } = this.state;
    return (
      <div>
        <h2>Tic Tac Toe</h2>
        <div className={style.border}>
          {grid.map((elm, idx) => {
            return <div className={style.grid} onClick={()=>this.handleClick(idx)}>{toSymbol(elm)}</div>;
          })}
        </div>
        <div>Player: {toSymbol(player)}</div>
        <div>Winner: {toSymbol(winner)}</div>
        <button onClick={this.gameReset}>Reset</button>
      </div>
    );
  }
}

export default App;
