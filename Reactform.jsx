import React from "react";
import "./Signup.css";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const countries = {
    India: ['Mumbai', 'Delhi', 'Bangalore'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
  };

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      firstNameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phonecode:"",
      phonenumber:"",
      pannumber:"",
      adharnumber:"",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validatePhonecode = this.validatePhonecode.bind(this);
    this.validatePhonenumber = this.validatePhonenumber.bind(this);
    this.validatePannum = this.validatePannum.bind(this);
    this.validateAdharNumber = this.validateAdharNumber.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phonecode",
      "phonenumber",
      "pannum",
      "AdharNumber"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    else if (name === "phonecode") isValid = this.validatePhonecode();
    else if (name === "phonenumber") isValid = this.validatePhonenumber();
    else if (name === "Pannum") isValid = this.validatePannum();
    else if (name === "AdharNumber") isValid = this.validateAdharNumber();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError
    });
    return passwordConfirmationError === "";
  }

  validatePhonecode() {
    let phonecodeError = "";
    const value = this.state.phonecode;
    if (value.trim() === "") phonecodeError = "Phone code is required";

    this.setState({
      phonecodeError
    });
    return phonecodeError === "";
  }

  validatePhonenumber() {
    let phonenumberError= "";
    const value = this.state.phonenumber;
    if (value.trim() === "")phonenumberError = "Phone number is required";

    this.setState({
      phonenumberError
    });
    return phonenumberError === "";
  }
  validatePannum() {
    let pannumError = "";
    const value = this.state.pannum;
    if (value.trim() === "") pannumError = "Pan number is required";

    this.setState({
      pannumError
    });
    return pannumError === "";
  }

  validateAdharNumber() {
    let AdharNumberError = "";
    const value = this.state.AdharNumber;
    if (value.trim() === "") AdharNumberError = "Adhar number is required";

    this.setState({
      AdharNumberError
    });
    return AdharNumberError === "";
  }


  render() {
    return (
      <div className="main" >
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>
            )}
             <input
              type="number"
              placeholder="Phone code(e.g +91)"
              name="phonecode"
               maxLength="5"
              value={this.state.phonecode}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            /><br/>
             {this.state.phonecodeError && (
              <div className="errorMsg">{this.state.phonecodeError}</div>
            )}
             <input
              type="number"
              placeholder="Phone Number"
              name="phonenumber"
               maxLength="10"
              value={this.state.phonenumber}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            /><br/>
             {this.state.phonenumberError && (
              <div className="errorMsg">{this.state.phonecodeError}</div>
            )}
             <input
              type="number"
              placeholder="Pan number"
              name="Pannum"
              maxLength="10"
              value={this.state.pannum}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            /><br/>
             {this.state.pannumError && (
              <div className="errorMsg">{this.state.pannumError}</div>
            )}
             <input
              type="number"
              placeholder="Adhar Number"
              name="AdharNumber"
              maxLength="12"
              value={this.state.AdharNumber}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
              className="box"
            /><br/>
             {this.state.AdharNumberError && (
              <div className="errorMsg">{this.state.AdharNumberError }</div>
            )}

             <div>
        <select name="country" value={this.state.country} onChange={this.handleChange} className="box">
          <option value="">Select Country</option>
          {Object.keys(countries).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
          <div>
        <select name="city" value={this.state.city} onChange={this.handleChange} className="box">
          <option value="">Select City</option>
          {(countries[this.state.country] || []).map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
       
      </div>
            <button onClick={this.handleSubmit}>Signup</button>
          </form>
          </div>
        )}
      </div>
    );
  }
}
export default FormComponent;