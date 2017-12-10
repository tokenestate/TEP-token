module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545, // Ganache
      network_id: "*" // Match any network id
    },
    devchain: {
      host: "172.17.0.1",
      port: 10001,
      network_id: "2017042099"
    }
  }
};
