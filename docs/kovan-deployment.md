```bash

Migrations dry-run (simulation)
===============================
> Network name:    'kovan-fork'
> Network id:      42
> Block gas limit: 12499988 (0xbebc14)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        23646019
   > block timestamp:     1614258094
   > account:             0x652db00cF5e206579Af4c5a71fD2f1D1F776Cf7b
   > balance:             2.8419135735
   > gas used:            255388 (0x3e59c)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000510776 ETH

   -------------------------------------
   > Total cost:         0.000510776 ETH


2_contract_migrations.js
========================

   Deploying 'Token'
   -----------------
   > block number:        23646021
   > block timestamp:     1614258140
   > account:             0x652db00cF5e206579Af4c5a71fD2f1D1F776Cf7b
   > balance:             2.8394371855
   > gas used:            1210656 (0x127920)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.002421312 ETH


   Deploying 'EthSwap'
   -------------------
   > block number:        23646022
   > block timestamp:     1614258189
   > account:             0x652db00cF5e206579Af4c5a71fD2f1D1F776Cf7b
   > balance:             2.8378598595
   > gas used:            788663 (0xc08b7)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.001577326 ETH

--> 2_contractMigrations: balanceOf(EthSwap): 1000000000000000000000000
   -------------------------------------
   > Total cost:         0.003998638 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.004509414 ETH





Starting migrations...
======================
> Network name:    'kovan'
> Network id:      42
> Block gas limit: 12487794 (0xbe8c72)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xabe1af37b6069dcbaaf82621708b7e36cd12300640033ba3acff2ed4dc4b5b22
   > Blocks: 3            Seconds: 19
   > contract address:    0x9e45a99d97a459E32bC1EcF8433620520f1E7810
   > block number:        23646048
   > block timestamp:     1614258236
   > account:             0x652db00cF5e206579Af4c5a71fD2f1D1F776Cf7b
   > balance:             2.8370165895
   > gas used:            270388 (0x42034)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00540776 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00540776 ETH


2_contract_migrations.js
========================

   Deploying 'Token'
   -----------------
   > transaction hash:    0xfb40da52c71afadf4ccf281fe8779c8a757b4dd757d72fc4bbfdc7c28f59a293
   > Blocks: 2            Seconds: 9
   > contract address:    0x72B64B69315e6de186aD2C450781b408aACDbdcB
   > block number:        23646055
   > block timestamp:     1614258272
   > account:             0x652db00cF5e206579Af4c5a71fD2f1D1F776Cf7b
   > balance:             2.8107527095
   > gas used:            1270656 (0x136380)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02541312 ETH


   Deploying 'EthSwap'
   -------------------
   > transaction hash:    0x38cc0ae408c7bf1c88a13d08a889ed21d53a996f69fc65bbdfc43f4cfae159a3
   > Blocks: 4            Seconds: 22
   > contract address:    0x36D66f8fC414c7c96C9d5d9526c4440D5185578d
   > block number:        23646063
   > block timestamp:     1614258316
   > account:             0x652db00cF5e206579Af4c5a71fD2f1D1F776Cf7b
   > balance:             2.7940794495
   > gas used:            833663 (0xcb87f)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01667326 ETH

--> 2_contractMigrations: balanceOf(EthSwap): 1000000000000000000000000

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04208638 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04749414 ETH
```