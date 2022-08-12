require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth rural unknown guess kite army genuine'; 
let testAccounts = [
"0x71ecc3960fe5c1bcc50f87a9c50235423237f63998d3b9f0e5eb5d1039ba3f44",
"0x20b2bafbc9e5508fc0173fbbb430b5d1c066b62f0ee6597fea2a7353703b3a97",
"0xd7d11a57e660ad615fe038420faa0113eccf739081f70a839ccf0d83636a9e77",
"0xca57c5a6305fadf9ea10521f244df1b6103a278ab80e9e0ca717a6e6b320d384",
"0x736f51fb4244e2438a7cc5d4cd4a64983b7b79c195b14e8229ac981690f1d34c",
"0x5766ef35bdcd58101e81df1e3f146b5962d3a9608234d2ef714c39513f00ab0f",
"0x353f10ca4b1a230761ba27a0eaebbbecb948e7e43dba4c84e155c83077181045",
"0xd862bdcf388d16ebfb9cd6b5ca8732828e526d8fcb10f68ac34415925c333b95",
"0x7960e7df52bced153e4c5464b92a7171b9b2a7d44d27b3da00a4f37bdba26d17",
"0xc43b88a3fb14a84ca69d4c19d46120cadc9942f71f89bc57fa6e287f6e685320"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

