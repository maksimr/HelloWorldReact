import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.message}
      </div>
    );
  }
}

Hello.propTypes = {
  message: React.PropTypes.string.isRequired
};

export default Hello;
