import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../style.scss';
import Person from './person';
import { getDaliMembers } from '../actions/index';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.members,
    };
  }

  // fetch json objects and update state
  componentWillMount() {
    this.props.getDaliMembers();

    this.setState({ members: this.props.members });
  }

  render() {
    return (
      <div id="mainDiv">
        <h2>Click on the dots to be transported to new dimesions! </h2>
        {
            // create a new person object for each item in the list
            this.props.members.map((item) => {
              return (
                <Person member={item} key={item.url} />
              );
            })
          }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    members: state.dali.members,
  }
);

export default withRouter(connect(mapStateToProps, { getDaliMembers })(Map));
