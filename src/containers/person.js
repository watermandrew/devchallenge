import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

const rootImageUrl = '//mappy.dali.dartmouth.edu/';

// calculate on-screen y coordinate based on latitude
function getLat(y) {
  const height = (y + 90) * (($(window).height()) / 180);
  return $(window).height() - height;
}

// calculate on-screen x coordinate based on longitude
function getLong(x) {
  const width = (x + 180) * (($(window).width()) / 360);
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
    this.onClick = this.onClick.bind(this);
  }

  onHover() {
    this.setState({ hover: true });
  }

  onStopHover() {
    this.setState({ hover: false });
  }

  // open new window when user clicks on a red dot
  onClick() {
    window.open(this.state.url);
  }

  // return formatted string representing list of terms on
  getTermsOn() {
    let termsString = this.state.terms_on[0];
    for (let i = 1; i < this.state.terms_on.length; i++) {
      termsString += `, ${this.state.terms_on[i]}`;
    }
    return termsString;
  }

  // return formatted string representing list of projects
  getProjects() {
    let projects = this.state.project[0];
    for (let i = 1; i < this.state.project.length; i++) {
      projects += `, ${this.state.project[i]}`;
    }
    return projects;
  }

  // optionally display terms on depending on whether this.state.terms_on is empty
  renderTermsOn() {
    if (this.state.terms_on.length > 0) {
      return (
        <div>Terms on: {this.getTermsOn()}</div>
      );
    }
  }

  // optionally display project(s) depending on whether this.state.project is empty
  renderProjects() {
    if (this.state.project.length > 0) {
      if (this.state.project[0].length > 0) {
        return (
          <div>Projects: {this.getProjects()}</div>
        );
      }
    }
  }

  // show personal information when user hovers over dot
  processHover() {
    if (this.state.hover) {
      return (
        <div className="hoverInfo">
          <h3>{this.state.name}</h3>
          <div>
            <img className="memberFaces" src={rootImageUrl + this.state.iconUrl} />
          </div>
          <div className="message">{this.state.message}</div>
          <div>{this.renderTermsOn()}</div>
          <div>{this.renderProjects()}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  // position red dot on screen corresponding to
  // person's longitude and latitude; show popup
  // full of info when user hovers over the red dot
  render() {
    return (
      <div className="person"
        style={{ position: 'absolute', left: getLong(this.state.lat_long[1]), top: getLat(this.state.lat_long[0]) }}
        onMouseOver={this.onHover}
        onMouseOut={this.onStopHover}
        onClick={this.onClick}
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
