//scans QR, then deterministic hashing SHA256

import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import ecc from 'eosjs-ecc';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
let Eos = require('eosjs');

const HTTP_STORAGE_API_ENDPOINT = 'http://10.20.10.100:4000/fuzzy/storage';
const HTTP_FUZZY_API_ENDPOINT = 'http://10.20.10.100:4000/fuzzy/';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
      key: '',
      displayData: false,
      killCamera: false,
      keys: []
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleData = this.handleData.bind(this);
    this.generateSequence = this.generateSequence.bind(this);
    this.generatePubKey = this.generatePubKey.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
      this.setState({ killCamera: true });
      this.handleData(data);
    }
  }
  handleData(data) {
    console.log('handling Data');
    claim = JSON.parse(data)

    const rawResponse = await fetch(HTTP_STORAGE_API_ENDPOINT + data.location, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }});      
    const response = await rawResponse.json();
    const encryptedData = response.encryptedData;
    const hash = ecc.sha256(encryptedData)
    const plainData = ecc.decrypt(claim.key, encryptedData);
    
    const useraccount = ecc.recover(plainData)

    const rawResponse = await fetch(HTTP_FUZZY_API_ENDPOINT + hash, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }});          
  })();
    const response = await rawResponse.json();
  }


  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.killCamera && (
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
          )}
          {this.state.displayData && <p>Deterministic password derivation:</p>}
          {this.state.displayData &&
            this.state.keys.map(number => <li key={number}>{number}</li>)}
        </div>
        {this.state.killCamera && (
          <center>
            <br />
            <WrappedLink to={paths.ENCRYPT_PATH} label="Encrypt" raised primary>
              Encrypt
            </WrappedLink>
          </center>
        )}
      </div>
    );
  }
}
