import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render () {
    return this.renderLinks();
  }

  renderLinks () {
    console.log(this.props.authenticated);
    return (
      this.props.authenticated
        ? (
            <div>
              <Link to="/">Redux Auth</Link>
              <Link to="/signout">Sign Out</Link>
              <Link to="/feature">Feature</Link>
            </div>
          )
        : (
            <div>
              <Link to="/">Redux Auth</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          )
    );
  }
}

let mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });
export default connect(mapStateToProps)(Header);
