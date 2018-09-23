//scans QR, then deterministic hashing SHA256

import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import ecc from 'eosjs-ecc';

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
      this.setState({killCamera:true});
      this.handleData(data);
    }
  }
  handleData(data) {
    console.log('handling Data');
    var key = ecc.sha256(data);
    this.generateSequence(key);
  }

  generatePubKey(secret) {
    var wif = ecc.seedPrivate(secret);
    var pubkey = ecc.privateToPublic(wif);
    return pubkey;
  }

  generateSequence(secret) {
    console.log('generating Sequence');
    var stuff = secret;
    for (var x = 0; x < 10; x++) {
      stuff = ecc.sha256(stuff);
      var pubkey = this.generatePubKey(stuff);
      this.state.keys.push(pubkey);
    }
    this.props.onKeysExtracted(this.state.keys);
    this.setState({ displayData: true });
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    return (
      <div>
      {(!this.state.killCamera) &&
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
      }
        {this.state.displayData &&
          this.state.keys.map(number => <li key={number}>{number}</li>)}
      </div>
    );
  }
}
