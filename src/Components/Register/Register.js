import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reducer } from "../../authSlice/authSlice";

const Register = () => {
  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: 470,
    margin: "20px auto",
    borderRadius: "7px",
  };
  const navigate = useNavigate()

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };
  const { isSignup } = useSelector((state) => state.userauth);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(reducer({ ...signupData }));

    if(isSignup){

      navigate('/login')
    }
  };

  return (
    <>
      <Grid sx={{ marginTop: 12 }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align={"center"}>
            <Typography variant="h5">Sign In</Typography>
            <TextField
              type={"text"}
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              sx={{ width: 400 }}
              required
              onChange={handleChange}
            />
            <TextField
              type={"number"}
              id="outlined-basic"
              label="Phone number"
              name="number"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              onChange={handleChange}
            />
            <TextField
              type={"email"}
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              onChange={handleChange}
            />
            <TextField
              type={"password"}
              id="outlined-basic"
              label="Password"
              name="password"
              variant="outlined"
              sx={{ width: 400, marginTop: 3 }}
              required
              onChange={handleChange}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ width: 400, marginTop: 5 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
