import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import { withRouter } from 'react-router-dom';

class WrappedLink extends React.Component {
  onClick = evt => {
    this.props.history.push(this.props.to);
  };

  render() {
    return (
      <Button raised primary onClick={this.onClick}>
        {this.props.children}
      </Button>
    );
  }
}

export default withRouter(WrappedLink);
