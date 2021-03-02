const EthSwap = artifacts.require('EthSwap');
const Token = artifacts.require('Token');

require('chai')
    .use(require('chai-as-promised'))
    .should();

//helper function to convert human readble numbers to wei units
function tokens(n){
    return web3.utils.toWei(n, 'ether');    
}

contract ('SmartContract EthSwap', ([deployer, investor1, investor2])=>{
    let token, ethSwap;
    let _totalSupply = tokens('1000000');

    before (async ()=>{
        token = await Token.new();
        ethSwap = await EthSwap.new(token.address);        
        await token.transfer(ethSwap.address, _totalSupply);

    })

    describe('Token deployment', async ()=>{
        it('Contract has a name', async ()=> {
            const name = await token.name();
            assert.equal(name, 'Argentum token')
        })        
    })

    describe('EthSwap deployment', async ()=>{
        it('Contract has a name', async ()=> {
            const name = await ethSwap.name();
            assert.equal(name, 'EthSwap instant exchange')
        })
        it ('Contract has tokens', async ()=>{
            let balance = await token.balanceOf(ethSwap.address);
            assert.equal(balance.toString(), _totalSupply);
        })        
    })

    describe('buyTokens() function', async ()=>{
        let result;
        before (async () => {
            result = await ethSwap.buyTokens({from: investor1, value: tokens('1')});
        })
        it ('Allows users to instantly purchase tokens from EthSwap for a fixed price', async () =>{            
            //check investor ARG balance after purchase
            let investorBalance = await token.balanceOf(investor1);
            assert.equal(investorBalance.toString(),tokens('100'));
            //check ethSwap ARG balance after purchase
            let ethSwapBalance = await token.balanceOf(ethSwap.address);
            assert.equal(ethSwapBalance.toString(),tokens('999900'));
            //check ethSwap ETH balance after purchase
            ethSwapBalance = await web3.eth.getBalance(ethSwap.address);
            assert.equal(ethSwapBalance.toString(),tokens('1'));
            //check events are fired correctly
            const event = result.logs[0].args;            
            assert.equal(event._from, investor1);
            assert.equal(event._token, token.address);
            assert.equal(event._value.toString(), tokens('100').toString());
            assert.equal(event._rate.toString(), '100');            
        })

    })

    describe ('sellTokens() function', async ()=> {
        let result;
        before (async () => {
            // Investor must approve ethSwap to transfer its ARG token (as per ERC20 std)
            await token.approve(ethSwap.address, tokens('100'), {from: investor1});
            result = await ethSwap.sellTokens(tokens('100'), {from: investor1});
        })
        it ('Allow users to instantly swap back ARG tokens for ETHER', async ()=> {
            // Check investor balance in ARG after swap
            let investorBalance = await token.balanceOf(investor1);
            assert.equal(investorBalance.toString(),tokens('0'));
            // Check investor balance in ETHER after swap
            // Check ethSwap balance in ETHER after swap
            ethSwapBalance = await web3.eth.getBalance(ethSwap.address);
            assert.equal(ethSwapBalance.toString(),tokens('0'));
            // Check ethSwap balance in ARG after SWAP
            let ethSwapBalance = await token.balanceOf(ethSwap.address);
            assert.equal(ethSwapBalance.toString(),tokens('1000000'));

            //check events are fired correctly
            const event = result.logs[0].args;            
            assert.equal(event._from, investor1);
            assert.equal(event._token, token.address);
            assert.equal(event._value.toString(), tokens('100').toString());
            assert.equal(event._rate.toString(), '100');      
            
            //Test failure: Investor can't sell more tokens than he has
            await ethSwap.sellTokens(tokens('500'),{from: investor1} ).should.be.rejected;
            
        })

    })

})