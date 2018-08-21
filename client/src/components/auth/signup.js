import React from "react";
import { Field, reduxForm } from "redux-form";

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
    console.log(formProps);
  };
}

export default reduxForm({ form: "signup" })(Signup);
