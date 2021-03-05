import React, { Component } from 'react'
import './App.css'
class LoadWallet extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        button: false,        
      }
      //this.handleClick = this.handleClick.bind(this);
    }

    render(){
        var buttonText;
        if(!this.props.walletLoaded) {
            buttonText = "Connect Wallet";
        } else {
            buttonText = "Disconnect Wallet";
        }
    
      return (
      <div>
        <button className="walletButton" 
            onClick={this.props.handleClick}> 
                <h5>{buttonText}</h5>
        </button>  
      </div>
      )
    }    
  }

export default LoadWallet;