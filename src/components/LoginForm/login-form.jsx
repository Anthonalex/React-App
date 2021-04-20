import React from "react";
import "./login-form.css";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidFirstName: "",
      firstNameErrorMsg: "",
      isValidLastName: "",
      lastNameErrorMsg: "",
      isValidEmail: "",
      emailErrorMsg: "",
      isValidPhoneNumber: "",
      phoneNumberErrorMsg: "",
    };
  }

  handleChange = (e) => {
    if (e.target.name === "firstName") {
      if (e.target.value.length >= 5) {
        this.setState(() => ({
          isValidFirstName: "valid",
          firstNameErrorMsg: "",
        }));
      }
      if (e.target.value.length >= 1 && e.target.value.length < 5) {
        this.setState(() => ({
          isValidFirstName: "invalid",
          firstNameErrorMsg: "please enter at least 5 characters",
        }));
      }
      if (e.target.value.length === 0) {
        this.setState(() => ({
          isValidFirstName: "",
          firstNameErrorMsg: "",
        }));
      }
    }

    if (e.target.name === "lastName") {
      if (e.target.value.length >= 5) {
        this.setState(() => ({
          isValidLastName: "valid",
          lastNameErrorMsg: "",
        }));
      }
      if (e.target.value.length >= 1 && e.target.value.length < 5) {
        this.setState(() => ({
          isValidLastName: "invalid",
          lastNameErrorMsg: "please enter at least 5 characters",
        }));
      }
      if (e.target.value.length === 0) {
        this.setState(() => ({
          isValidLastName: "",
          lastNameErrorMsg: "",
        }));
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div className="error-msg">
          One of the fields is incorrect or invalid please, follow the examples
          in order to continue.
        </div>
        <p>First Name</p>
        <input
          type="text"
          name="firstName"
          className={this.state.isValidFirstName}
          placeholder="enter your username"
          onChange={this.handleChange}
          maxLength="12"
        />
        <span>{this.state.firstNameErrorMsg}</span>
        <p>Last Name</p>
        <input
          type="text"
          name="lastName"
          className={this.state.isValidLastName}
          placeholder="enter your lastname"
          onChange={this.handleChange}
          maxLength="12"
        />
        <span>{this.state.lastNameErrorMsg}</span>
        <p>Email</p>
        <input
          type="text"
          name="email"
          className={this.state.isValidEmail}
          placeholder="enter your email address"
          onChange={this.handleChange}
          maxLength="20"
        />
        <span>{this.state.firstNameErrorMsg}</span>
        <p>Phone Number</p>
        <input
          type="text"
          name="phoneNumber"
          className={this.state.isValidPhoneNumber}
          placeholder="enter your phone number"
          onChange={this.handleChange}
          maxLength="10"
        />
        <span>{this.state.firstNameErrorMsg}</span>
      </div>
    );
  }
}
