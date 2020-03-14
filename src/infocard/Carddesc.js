import React, { Component , PureComponent } from 'react';

class CardDesc extends PureComponent {
  state={
    open:false,
  }
  toggleDesc = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    const desc = this.props.data;
    const open = this.state.open;
    const cardDescCondition = `card__desc__text ${open ? '' : 'less'}`
    return (
      <div className="card__desc">
          <div className={cardDescCondition}>
            {desc}
          </div>
          <button 
          className="card__desc__btn"
          onClick={this.toggleDesc}
          >
            {open ? 'less' : 'more' }
          </button>
      </div>
    );
  }
}

export default CardDesc;