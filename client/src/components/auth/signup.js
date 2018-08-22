import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import React from "react";

import { handleUserSignup } from "../../actions";

class Signup extends React.Component {
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

        <button>Sign up</button>
      </form>
    );
  }

  onSubmit = (formProps) => {
    this.props.handleUserSignup(formProps);
  };
}

export default compose (
  connect(null, { handleUserSignup }),
  reduxForm({ form: "signup" })
)(Signup);
