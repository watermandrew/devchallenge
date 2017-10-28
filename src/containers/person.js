import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

function getLat(y) {
  const height = (y + 90) * (($(window).height()) / 180);
  // height -= 15;
  return $(window).height() - height;
}

function getLong(x) {
  const width = (x + 180) * (($(window).width()) / 360);
  // width -= 12;
  return width;
}

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      name: this.props.member.name,
      iconUrl: this.props.member.iconUrl,
      url: this.props.member.url,
      message: this.props.member.message,
      lat_long: this.props.member.lat_long,
      terms_on: this.props.member.terms_on,
      project: this.props.member.project,
    };

    this.onHover = this.onHover.bind(this);
    this.onStopHover = this.onStopHover.bind(this);
  }

  onHover() {
    this.setState({ hover: true });
    console.log('hovering!');
  }

  onStopHover() {
    this.setState({ hover: false });
    console.log('stop hovering!');
  }

  processHover() {
    if (this.state.hover) {
      return (
        <div>
          <p>{this.state.name}</p>
          <img src={this.state.iconUrl} alt="" />
          <a href={this.state.url}>url</a>
          <p>{this.state.message}</p>
          <p>{this.state.lat_long}</p>
          <p>{this.state.terms_on}</p>
          <p>{this.state.project}</p>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="person"
        style={{ position: 'absolute', left: getLong(this.state.lat_long[1]), top: getLat(this.state.lat_long[0]) }}
        onMouseOver={this.onHover}
        onMouseOut={this.onStopHover}
      >
        <img className="dot" src="http://www.clker.com/cliparts/T/G/b/7/r/A/red-dot-md.png" alt="" />
        {this.processHover()}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {}
);


export default withRouter(connect(mapStateToProps)(Person));
