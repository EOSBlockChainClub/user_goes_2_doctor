import React, { Component } from 'react';
import * as deriveDataComputation from './deriveDataComputation';
let Eos = require('eosjs');

const DOCTORS_KEY = '5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5';
const DOCTORS_ACCOUNT_NAME = 'useraaaaaaaa';
const CHAIN_ID = 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f';
const HTTP_CHAIN_API_ENDPOINT = 'http://localhost:8888';
const HTTP_STORAGE_API_ENDPOINT = 'http://localhost:4000/fuzzy/storage';
const CONTRACT = 'fuzzchainacc';

function encrypt(key, input) {
  return input.toString();
}
function sign(key, input) {
  return input;
}

export default class Publish extends Component {
  state = {
    location:"",
    hash:"",
    showQRCode: false
  }

  componentDidMount() {
    let eos = Eos({
      keyProvider: DOCTORS_KEY, // private key
      httpEndpoint: HTTP_CHAIN_API_ENDPOINT,
      chainId: CHAIN_ID,
      authorization: DOCTORS_ACCOUNT_NAME + '@active',
    });

    const encryptedGym = encrypt(
      this.props.keys ? this.props.keys[1] : null,
      sign(
        DOCTORS_KEY,
        deriveDataComputation.canGym(this.props.medicalInformation)
      )
    );

    (async () => {
      const rawResponse = await fetch(HTTP_STORAGE_API_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ encryptedData: encryptedGym })
      });
      const response = await rawResponse.json();
      const hash = response.hash;
      const location = response.location;

      eos
        .contract(CONTRACT)
        .then(myaccount => {
          const result = myaccount.publishdata(DOCTORS_ACCOUNT_NAME, hash, location);
          result.then((r) => {
            console.log(r)
            this.setState({hash, location, showQRCode:true});
          })
         
        });
    })();
  }

  render() {
    return <div>
    <center>
    {!this.state.showQRCode && (
      <div>Publishing encrypted data to the blockchain...</div>)
    }
    {this.state.showQRCode && (
      <img width="200px" src="images/qr-code.png"/>
    )}
    </center>
    </div>;
  }
}
