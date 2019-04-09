module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: "0.4.24", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          // runs: <number>   // Optimize for how many times you intend to run the code
        }
      }
    }
  },
  networks: {
    development: {
      host: '121.196.200.225', // your host
      port: 1337,
      network_id: '*',
      privateKey: '0x6b411b89cd42cd8b6cf30f6059395ae5318aec1141d176ae93b306d7a98ddf38',
      // fromAddr: '0x7b904a9B525CCB715d85d57daC34E72B180160c5'
      quota: 953000
    },
  },
}
