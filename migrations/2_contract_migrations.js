const EthSwap = artifacts.require('EthSwap');
const Token = artifacts.require('Token');
const _totalSupply = '1000000000000000000000000'
module.exports = async function (deployer){
    await deployer.deploy(Token);
    const token = await Token.deployed();

    await deployer.deploy(EthSwap, token.address);
    const ethSwap = await EthSwap.deployed();

    //transfer 100 million tokens to EthSwap contract
    await token.transfer(ethSwap.address, _totalSupply);
    var balance = await token.balanceOf(ethSwap.address);
    console.log('--> 2_contractMigrations: balanceOf(EthSwap):' , balance.toString())
};