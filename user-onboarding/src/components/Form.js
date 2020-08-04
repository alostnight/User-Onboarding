import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formInfo = yup.object().shape({
  name: yup.string().required("Please Enter Full Name"),
  email: yup
    .string()
    .email("Must be valid email")
    .required("Must Be Full Email"),
  password: yup
    .string()
    .required("Please Enter Password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Number and one special case Character"
    ),
  terms: yup.boolean().oneOf([true], "Please Agree To The Terms"),
});

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formInfo.isValid(formState).then((vaild) => {
      setButtonDisabled(!vaild);
    });
  }, [formState]);

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formInfo, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const formSubmit = (e) => {
    e.preventDfault();
    axios
      .post("https://reqres.in/api/user", formState)
      .then((Response) => console.log(Response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={formSubmit}>
      <label hmtlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          id="email"
          value={formState.email}
          onChange={inputChange}
        />
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
      </label>
      <label hmtlFor="password">
        Password
        <input
          type="text"
          name="password"
          id="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errorState.password.length > 0 ? (
          <p className="error">{errorState.password}</p>
        ) : null}
      </label>
      <label htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Conditions
        {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}
      </label>
      <button disabled={buttonDisabled}>Submit</button>
    </form>
  );
}

//Name, Email, Password, Terms of Service(checkbox), submit button
