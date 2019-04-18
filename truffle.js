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
      privateKey: '0x4781817aaf657ca195f0411fe51e4c61b9d4c584361742029408253d17ba290d',
      // fromAddr: '0x00b6e5eaE20a741E2534B24cE29d02586b532797'
      quota: 953000
    },
  },
}
