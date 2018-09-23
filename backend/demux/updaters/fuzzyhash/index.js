const publishData = require('./publishdata')

const account = process.env.EOSIO_CONTRACT_ACCOUNT

module.exports = [
  {
    actionType: `${account}::publishdata`,
    updater: publishData
  },
]
