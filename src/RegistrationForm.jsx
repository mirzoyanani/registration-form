import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, SetGender] = useState("");

  // let userInfo = {
    //     firstname:firstName,
    //     lastname:lastName,
    //     email:email,
    //     password:password,
    //     confirmPassword:confirmPassword,
    //     age:age,
    //     gender:gender
    // }

  function login(e) {
    e.preventDefault();
    
    let errcount = 0;
    if (firstName.length == 0) {
      console.log("Write firstname");
      errcount++;
    }
    if (lastName.length == 0) {
      console.log("Write lastname");
      errcount++;
    }
    if (email.length == 0) {
      console.log("Write email");
      errcount++;
    }
    if (password.length == 0 || password.length > 8) {
      console.log("Write a password that contains at least 8 charcters");
      errcount++;
    }
    if (password != confirmPassword) {
      console.log("Review the confirmPassword field");
      errcount++;
    }
    if(errcount==0){
        console.log("Դուք հաջողությամբ գրանցվեցիք");
    }
    // console.log(userInfo);
  }
  return (
    <div className="registration-form">
      <div className="title">Registration</div>
      <form onSubmit={login}>
        <div className="username">
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            placeholder="FirstName"
          />
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="LastName"
          />
        </div>
        <input
          type="email"
          id="email"
          className="form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div className="password">
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <input
          className="form__input"
          type="number"
          id="quantity"
          name="quantity"
          min={16}
          max={100}
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div>
          <input
            className="form__inputradio"
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => SetGender(e.target.value)}
          />
          Male
          <input
            className="form__inputradio"
            type="radio"
            name="gender"
            value="Female"
            onChange={(e) => SetGender(e.target.value)}
          />
          Female
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
