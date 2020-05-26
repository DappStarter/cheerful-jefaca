require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember erosion grid arch success ghost'; 
let testAccounts = [
"0x3f48ce7bb1fe73e6080493c770a6bf5ec652556cf6b6ab52562d99f4ee87e4e9",
"0x3fb96b8a0ae3ea4494570ed45ce4c54aab610db88ebfbd8e22f46edb30ba43ff",
"0xc271bbe72d5f0994bcfc191cb6fa3a82d5513d049dd9852c49757989be9a489b",
"0xf2356a50a172f8d7fa4e353bfca87e8b7af2aa4f5efabe2934f93d97042fd90e",
"0xc9cc0eb4d5c6796181aae29441a5b090d91dbe9f900242e85c218c310d928337",
"0x88edc685ec4ac9edb69306fffccb5c9d9547605354c87ba5a29ba7b57ab47a1e",
"0x10d22928879d1a96d5f51968d1c543584487baecbc78442a9eebc7df1bd2f49c",
"0x32d85d3cbac71e40c142b46a32b617e5ad8d1089da32f8a2abc9308e3546f176",
"0xdb747b237ff76c913ea5639792cd05c240753299b695e12efa8e90e6aefd3961",
"0x0abcea2f10a63a9f4b40bf79499f6ff291ea2f0b73942257d846bbb0b6fa983b"
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
            version: '^0.5.11'
        }
    }
};
