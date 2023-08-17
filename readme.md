# Decentralized Escrow Application

This is an Escrow Dapp built with [Hardhat](https://hardhat.org/).
The Ethereum smart contract defines an escrow system. It involves an arbiter, beneficiary, and depositor. The arbiter settles disputes, the beneficiary receives funds, and the depositor initiates the contract with Ether. Approval by the arbiter triggers Ether transfer to the beneficiary. This transparent, automated system ensures secure and trustworthy transactions, benefiting various applications.

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

## Front-End

`cd` into the `/app` directory and run `npm install`

To run the front-end application run `npm start` from the `/app` directory. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Back-End

`cd` into the `/server` directory and run `npm install`

To run the server using  `nodemon` or  `node index` from the `/server`  
Server will start running into the PORT 4000

