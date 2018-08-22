import { connect } from "react-redux";
import React from "react";

import { userSignout } from "../../actions";

class Signout extends React.Component {
  render () {
    return <div>Sorry to see you go</div>
  }

  componentDidMount () {
    this.props.userSignout();
  }
}

export default connect(null, { userSignout })(Signout);
