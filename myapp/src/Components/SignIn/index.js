import React, { Component } from "react";
import FormErrors from "../Ui/FormErrors";
import { firebase } from "../../firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    emailValid: false,
    formValid: false,
    loginError: false,
    formErrors: { email: "" }
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;

      default:
        break;
    }

    this.setState({ emailValid: emailValid }, this.validateForm);
  };

  validateForm = () => {
    this.setState({ formValid: this.state.emailValid });
  };

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
    this.validateField(name, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    let formValid = this.state.formValid;
    // let emailValid = this.state.emailValid
    let { email, password } = this.state;

    if (formValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          this.props.history.push("/");
        })
        .catch(error => {
          this.setState({ loginError: true });
        });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ marginTop: "100px" }}>
          <form onSubmit={this.handleSubmit}>
            <h2>Please Login</h2>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
            />
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="password"
              value={this.state.password}
            />
            <input
              disabled={!this.state.formValid}
              type="submit"
              value="login"
            />
            {this.state.loginError ? (
              <div className="error_label">Email or Password invalid</div>
            ) : null}
            <FormErrors formErrors={this.state.formErrors} />
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
