// src/index.js
const bitcoin = require('bitcoinjs-lib');
const bcoin = require('bcoin');
const btcd = require('btcd');
const blockcypher = require('blockcypher');

console.log("Blockchain project initialized");

// Example of creating a Bitcoin address using bitcoinjs-lib
const keyPair = bitcoin.ECPair.makeRandom();
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

console.log("Generated Bitcoin address:", address);
