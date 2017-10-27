import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.member.name,
      iconUrl: this.props.member.iconUrl,
      url: this.props.member.url,
      message: this.props.member.message,
      lat_long: this.props.member.lat_long,
      terms_on: this.props.member.terms_on,
      project: this.props.member.project,
    };
  }

  //
  // name: 'Drew',
  // iconUrl: 'https://en.wikipedia.org/wiki/Moose#/media/File:Moose_superior.jpg',
  // url: 'www.Google.com',
  // message: 'Hello!',
  // lat_long: [0, 0],
  // terms_on: ['17F, 18W, 18S'],
  // project: ['Project'],

  // componentDidMount() {
  // }

  render() {
    return (
      <div className="person">
        <p>{this.state.name}</p>
        <img src={this.state.iconUrl} alt="" />
        <a href={this.state.url}>url</a>
        <p>{this.state.message}</p>
        <p>{this.state.lat_long}</p>
        <p>{this.state.terms_on}</p>
        <p>{this.state.project}</p>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {}
);


export default withRouter(connect(mapStateToProps)(Person));
