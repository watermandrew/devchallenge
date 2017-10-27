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

  componentWillMount() {
    this.props.getDaliMembers();

    this.setState({ members: this.props.members });
  }

  render() {
    return (
      <div>
        <p> This is my map </p>
        <div>
          {
            this.props.members.map((item) => {
              return (
                <Person member={item} />
              );
            })
          }
        </div>
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
