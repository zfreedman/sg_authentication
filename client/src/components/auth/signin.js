import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import React from "react";

import { handleUserSignin } from "../../actions";

class Signin extends React.Component {
  render () {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            autoComplete="none"
            component="input"
            name="email"
            type="text"
          />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field
            autoComplete="none"
            component="input"
            name="password"
            type="password"
          />
        </fieldset>

        <div>
          {this.props.errorMessage}
        </div>

        <button>Sign in</button>
      </form>
    );
  }

  onSubmit = (formProps) => {
    this.props.handleUserSignin(
      formProps,
      () => this.props.history.push("/feature")
    );
  };
}

let mapStateToProps = ({ auth }) => ({ errorMessage: auth.errorMessage });

export default compose (
  connect(mapStateToProps, { handleUserSignin }),
  reduxForm({ form: "signin" })
)(Signin);
