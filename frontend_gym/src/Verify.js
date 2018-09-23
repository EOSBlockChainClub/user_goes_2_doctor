//scans QR, then deterministic hashing SHA256

import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import ecc from 'eosjs-ecc';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import * as verify from './verifyFunctions';
let Eos = require('eosjs');

const HTTP_STORAGE_API_ENDPOINT = 'http://localhost:4000/fuzzy/storage/';
const HTTP_FUZZY_API_ENDPOINT = 'http://localhost:4000/fuzzy/';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
      key: '',
      displayData: false,
      killCamera: false,
      displayError: false,
      error: undefined
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleData = this.handleData.bind(this);
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

  parseClaim(data) {
    return {
      location:
        '571bd1853c22393131e2dcadce86894da714ec14968895c8b7ed18154b2be8cd',
      key: '',
      hash: 'b5bea41b6c623f7c09f1bf24dcae58ebab3c0cdd90ad966bc43a45b44867e12b'
    };
  }

  async handleData(data) {
    console.log('handling Data ' + data);
    const claim = this.parseClaim(data);
    console.log('handling Data ' + claim);
    const rawResponseStorage = await fetch(
      HTTP_STORAGE_API_ENDPOINT + claim.location,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    const responseStorage = await rawResponseStorage.json();
    console.log('handling storage ' + responseStorage);
    this.setState({ displayData: true, verifyResult: true, killCamera: true });
    const encryptedData = responseStorage[0].encryptedData;
    const hash = ecc.sha256(encryptedData);
    const plainData = ecc.decrypt(claim.key, encryptedData);

    const useraccount = ecc.recover(plainData);

    const rawResponseFuzzy = await fetch(HTTP_FUZZY_API_ENDPOINT + hash, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const responseFuzzy = await rawResponseFuzzy.json();
    if (responseFuzzy.user === useraccount) {
      if (verify.canGym(plainData)) {
        this.setState({
          displayData: true,
          verifyResult: true,
          killCamera: true
        });
      } else {
        this.setState({
          displayData: true,
          verifyResult: false,
          killCamera: true
        });
      }
    } else {
      this.setState({
        displayError: true,
        error: Error('Invalid Data'),
        killCamera: true
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.killCamera && (
            <div style={{ margin: '0 auto', width: 400 }}>
              <QrReader
                delay={this.state.delay}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </div>
        {this.state.killCamera && (
          <center>
            {this.state.displayData && (
              <div>Result: {this.state.verifyResult.toString()}</div>
            )}
            {this.state.displayError && <div>{this.state.error}</div>}
          </center>
        )}
      </div>
    );
  }
}
