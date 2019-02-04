import React, { Component } from "react";
import FormErrors from "../../Ui/FormErrors";
import { firebasePromotions } from "../../../firebase";
class Form extends Component {
  state = {
    email: "",
    name: "",
    formErrors: { email: "", name: "" },
    formSuccess: "",
    emailValid: false,
    nameValid: false,
    formValid: false
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.match(/^[a-zA-Z ]+$/);
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    this.setState({ formValid: this.state.emailValid && this.state.nameValid });
  };

  handleSubmit = arg => e => {
    e.preventDefault();
    let formIsValid = this.state.formValid;
    let emailToSubmit = this.state.email;
    let nameToSubmit = this.state.name;
    let dataToSubmit = { email: emailToSubmit, name: nameToSubmit };

    if (formIsValid) {
      firebasePromotions
        .orderByChild("email")
        .equalTo(emailToSubmit)
        .once("value")
        .then(snapshot => {
          console.log(snapshot.val());
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.setState({ formSuccess: "Congratulation" });
            this.resetForm();
          } else {
            this.setState({ formSuccess: "Email already on the database" });
          }
        });
    }
  };

  handleChange = e => {
    let valueInput = e.target.value;
    let nameInput = e.target.name;

    this.setState({ [nameInput]: valueInput }, () => {
      this.validateField(nameInput, valueInput);
    });
  };

  resetForm = () => {
    setTimeout(() => {
      this.setState({
        email: "",
        name: "",
        formErrors: { email: "", name: "" },
        formSuccess: "",
        emailValid: false,
        nameValid: false,
        formValid: false
      });
    }, 2000);
  };

  render() {
    return (
      <div className="enroll_wrapper">
        <form onSubmit={this.handleSubmit("arg")}>
          <div className="enroll_title">Enter your email</div>
          <div className="enroll_input">
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Your Email"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              disabled={!this.state.formValid}
              type="submit"
              value="Enroll"
            />
            <div className="success_label">{this.state.formSuccess}</div>

            <FormErrors formErrors={this.state.formErrors} />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
