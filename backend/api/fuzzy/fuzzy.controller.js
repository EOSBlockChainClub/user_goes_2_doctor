const Fuzzy = require('./fuzzy.model')
const eccjs = require ('eosjs-ecc')

const storage = [];

/**
 * Get list of all fuzzy data confirmed by the blockchain
 * @returns {Fuzzy[]}
 */
const listConfirmed = async (req, res) => {
  try {
    const confirmedFuzzys = await Fuzzy.find({ fuzzyConfirmed: true }).exec()
    console.log(JSON.stringify(confirmedFuzzys))
    res.send(confirmedFuzzys)
  } catch (err) {
    console.error(err)
  }
}

const findByHash = async (req,res) => {
  try {
    const confirmedFuzzys = await Fuzzy.find({ hash: req.params.hash }).exec()
    console.log(JSON.stringify(confirmedFuzzys))
    res.send(confirmedFuzzys)
  } catch (err) {
    console.error(err)
  }
}

const download = async(req, res) => {
  try {
     console.log("storage")
     console.log(storage)
     console.log(req.params.location)
     const rows = storage.filter((row) => {
       return row.location === req.params.location
      })
     res.send(rows)
  } catch (err) {
    console.error(err)
  }
}

const upload = async (req, res) => {
  try {
    console.log("data received")
    const encryptedData = req.body.encryptedData
    console.log(req)
    console.log(JSON.stringify(req.body))
    const hash = eccjs.sha256(encryptedData)
    const location = eccjs.sha256(hash)
    storage.push({location, encryptedData})
    res.send({hash, location})
  } catch (err) {
    console.error(err)
  }
}

module.exports = { listConfirmed, findByHash, upload, download }
