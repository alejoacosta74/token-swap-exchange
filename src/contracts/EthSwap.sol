pragma solidity >=0.8.0;

import './Token.sol';
import "@openzeppelin/contracts/math/SafeMath.sol";

contract EthSwap {
    string public name = "EthSwap instant exchange";
    Token public token;
    uint public rate = 100; //redepmtion rate: # of Argentum tokens to receive for 1 ether
    using SafeMath for uint256;

    constructor (Token _token) public {
        token = _token;
    }

    event TokensPurchased (address indexed _from, address indexed _token, uint256 _value, uint _rate);
    event TokensSold (address indexed _from, address indexed _token, uint256 _value, uint _rate);
    event buyFailure(address indexed _from, uint256 _value);

    function buyTokens () public payable {
        uint tokenAmount = rate.mul(msg.value) ; 
        
        //require that EthSwap exchange has enough tokens to proceed with swap
        require(token.balanceOf(address(this)) >= tokenAmount);
        
        //transfer tokens to investor
        bool result = token.transfer(msg.sender, tokenAmount);
        if (result){
            emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
        }
        else{
            emit buyFailure(msg.sender, tokenAmount);
        }

    }

    function sellTokens(uint _amount) public {
        require(token.balanceOf(msg.sender) >= _amount);
        uint etherAmount = _amount.div(rate);
        require (address(this).balance >= etherAmount);
        token.transferFrom(msg.sender , address(this),  _amount);
        payable(msg.sender).transfer(etherAmount);
        emit TokensSold (msg.sender, address(token), _amount, rate);
    }

}
