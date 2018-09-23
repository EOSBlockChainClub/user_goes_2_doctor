import React from 'react';
import WrappedLink from './WrappedLink';
import * as paths from './paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ecc from 'eosjs-ecc';

class ProvideClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData : false,
      keys : []
    }
  }

  componentDidMount() {
    this.generateSequence()
  }

  generatePubKey(secret) {
    var wif = ecc.seedPrivate(secret);
    var pubkey = ecc.privateToPublic(wif);
    return pubkey;
  }

  generateSequence() {
    console.log('generating Sequence');
    var stuff = this.props.masterSecret;
    for (var x = 0; x < 5; x++) {
      stuff = ecc.sha256(stuff);
      var pubkey = this.generatePubKey(stuff);
      this.state.keys.push(pubkey);
    }
    this.setState({ displayData: true });
  }

  renderQrCode(key, claim) {
    return (
      <img width="80%" src="images/qr-code.png"/> 
    )
  }

  render() {
    return (
      <div>
        <div>
          </div>      
              
          {this.state.displayData && 
          (<center>{this.renderQrCode(this.state.keys[this.props.informationRequest], this.props.claims[this.props.informationRequest])}</center>)
          }
        <center>
          <WrappedLink
            to={paths.WELCOME_PATH}
            label="Back"
            raised
            primary
          >
            Back
          </WrappedLink>
        </center>
      </div>
    );
  }
}

export default ProvideClaim;
