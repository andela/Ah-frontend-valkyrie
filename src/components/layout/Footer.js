import React, { Component } from 'react';

class Footer extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
            Copyright &copy; 2019 Authors Haven.
        </footer>
      </div>
    );
  }
}

export default Footer;
