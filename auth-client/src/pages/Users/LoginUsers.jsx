import { Button, FormLabel, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginUsers = () => {
  const history = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log("success 2");
      LoginUser();
    }
  }, [FormErrors]);

  const LoginUser = () => {
    alert("success");
    history("/dashboard", { replace: true });
  };

  return (
    <>
      <div className="formPage">
        <div className="FormContainer">
          <form onSubmit={handleSubmit}>
            <div className="formTitle">Login</div>
            <FormLabel required className="label">
              Email
            </FormLabel>
            <TextField
              name="email"
              value={values.email}
              onChange={handleChange}
              error={FormErrors.email}
              helperText={FormErrors.email}
              style={{ paddingBottom: "30px" }}
              fullWidth
            />

            <FormLabel required className="label">
              Password
            </FormLabel>
            <TextField
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={FormErrors.password}
              helperText={FormErrors.password}
              style={{ paddingBottom: "30px" }}
              fullWidth
            />

            <span style={{ paddingLeft: "87%" }}>
              <Button type="submit" variant="contained" color="secondary">
                Login
              </Button>
            </span>
          </form>

          <br />
          <br />
          <div className="title">Still no Account !!</div>
          <span style={{ paddingLeft: "40%" }}>
            <Button variant="outlined" color="info">
              <Link to="/register" className="links" style={{ color: "blue" }}>
                Create One
              </Link>
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginUsers;
