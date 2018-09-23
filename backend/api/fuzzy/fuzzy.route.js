const express = require('express')
const fuzzyController = require('./fuzzy.controller')
const mongoose = require ('mongoose')

const router = express.Router()

var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

router.route('/').get(fuzzyController.listConfirmed)

router.route('/hash/:hash').get(fuzzyController.findByHash)

router.route('/storage/:location').get(fuzzyController.download)
router.route('/storage').post(fuzzyController.upload)




module.exports = router
