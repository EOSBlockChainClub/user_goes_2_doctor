import React, { Component } from 'react';
import * as deriveDataComputation from './deriveDataComputation';
let Eos = require('eosjs');

const DOCTORS_KEY = 'fvfevrf';
const DOCTORS_ACCOUNT_NAME = 'fdfvdsgvdfgdfgdf';
const CHAIN_ID = 'edsfrfvfrv';
const HTTP_CHAIN_API_ENDPOINT = 'http://127.0.0.1:8888';
const HTTP_STORAGE_API_ENDPOINT = 'http://localhost:4000/fuzzy';

function encrypt(key, input) {
  return input;
}
function sign(key, input) {
  return input;
}
function post() {
  return { hash: 'hash', locationStorage: 'locationStorage' };
}

export default class Publish extends Component {
  componentDidMount() {
    console.log(this.props);

    let eos = Eos({
      keyProvider: DOCTORS_KEY, // private key
      httpEndpoint: HTTP_CHAIN_API_ENDPOINT,
      chainId: CHAIN_ID
    });

    const encryptedGym = encrypt(
      this.props.keys ? this.props.keys[0] : null,
      sign(
        DOCTORS_KEY,
        deriveDataComputation.canGym(this.props.medicalInformation)
      )
    );
    let { hash, locationStorage } = post(
      encryptedGym,
      HTTP_STORAGE_API_ENDPOINT
    );

    eos
      .contract('fuzzchainacc')
      .then(myaccount =>
        myaccount.publishdata(DOCTORS_ACCOUNT_NAME, hash, locationStorage)
      );
  }

  render() {
    return <center>Publishing encrypted data to the blockchain...</center>;
  }
}
