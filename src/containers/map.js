import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../style.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }

  render() {
    return (
      <div>
        <p> This is my map </p>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    members: state.dali.members,
  }
);

export default withRouter(connect(mapStateToProps)(Map));
