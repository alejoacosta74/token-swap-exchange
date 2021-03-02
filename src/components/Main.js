import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy',
      buyButton : true,
      sellButton: false
    }
  }  

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
      />
    }

    return (
      <div id="content" className="mt-3">

        <div className="d-flex justify-content-between mb-3">
          <button
              className={this.state.buyButton ? "buttonTrue": "buttonFalse"}              
              onClick={(event) => {
                  if (this.state.currentForm !== 'buy'){
                    this.setState({ 
                    currentForm: 'buy' ,
                    buyButton:!this.state.buyButton,
                    sellButton:!this.state.sellButton
                  })
                }
              }}
            >
            Buy
          </button>          
          <span className="text-muted">&lt; &nbsp; &gt;</span>
          <button
              className={this.state.sellButton ? "buttonTrue": "buttonFalse"}              
              onClick={(event) => {
                  if (this.state.currentForm !== 'sell'){
                    this.setState({
                    currentForm: 'sell',
                    buyButton:!this.state.buyButton,
                    sellButton:!this.state.sellButton
                  })
                }
              }}
            >
            Sell
          </button>
        </div>

        <div className="card mb-4" >

          <div className="card-body">

            {content}

          </div>

        </div>

      </div>
    );
  }
}

export default Main;