"use client";

import * as React from "react";
import { useActionState } from "react";
import { useState } from "react";
import { authenticate } from "@/app/lib/login_action";
import { useSearchParams } from "next/navigation";
import { OutlinedInput } from "@mui/material";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";
import RegisterButton from "@/app/ui/buttons/register-button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
//import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
//import Link from "next/link";
import "../globals.css";

export default function RegistrationForm({ onSubmit }) {
  // authenticating login credentials
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  // handling the password and its visibility
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  // storing and handling the form input
  const [state, setState] = useState({
    fname: String,
    lname: String,
    hometown: String,
    email: String,
    pw: String,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const { fname, lname, hometown, email, pw } = state;

  //handle the form's submitted input
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected attractions:", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="md" fixed>
        <div style={{ alignItems: "center", height: "86dvh", width: "100" }}>
          <Stack spacing={5} sx={{ alignItems: "center", paddingTop: 5}}>
            {/* <Image
              preload={false}
              loading="eager"
              src="/bg-welcome.png"
              alt="Welcome to your tour!"
              width={356}
              height={164}
              placeholder="empty"
            /> */}

            <Typography variant="h6" gutterBottom align="center">
              Please enter your details.
            </Typography>
          </Stack>

          {/* first name input */}
          <Grid
            container
            columns={1}
            spacing={1}
            sx={{ paddingTop: 1, paddingBottom: 0, justifyContent: "left" }}
          >
            <FormControl sx={{ m: 1, width: "25ch" }} >
              <InputLabel htmlFor="fname">First name</InputLabel>
              <OutlinedInput
                id="fname"
                name="fname"
                defaultValue=""
                label="First name"
                fullWidth
              />
            </FormControl>
          </Grid>

          {/* last name input */}
          <Grid
            container
            columns={1}
            spacing={1}
            sx={{ paddingTop: 1, paddingBottom: 0, justifyContent: "left" }}
          >
            <FormControl sx={{ m: 1, width: "25ch" }} >
              <InputLabel htmlFor="lname">Last name</InputLabel>
              <OutlinedInput
                id="lname"
                defaultValue=""
                type="text"
                value={"".toString()}
                label="Last name"
                fullWidth
                onChange={handleChange}
              />
            </FormControl>
          </Grid>

          {/* home city input */}
          <Grid
            container
            columns={1}
            spacing={1}
            sx={{ paddingTop: 1, paddingBottom: 0, justifyContent: "left", width:"100%" }}
          >
            <FormControl sx={{ m: 1, width: "25ch" }} >
              <InputLabel htmlFor="lname">Your hometown</InputLabel>
              <OutlinedInput
                id="hometown"
                defaultValue=""
                type="text"
                value={"".toString()}
                label="hometown"
                fullWidth
                onChange={handleChange}
              />
            </FormControl>
          </Grid>

          {/* Email input */}
          <Grid
            container
            columns={1}
            spacing={1}
            sx={{ paddingTop: 1, paddingBottom: 0, justifyContent: "center" }}
          >
             <FormControl sx={{ m: 1, width: "25ch" }} >
              <InputLabel htmlFor="lname">Email</InputLabel>
              <OutlinedInput
                id="email"
                defaultValue=""
                type="email"
                value={"".toString()}
                label="email"
                fullWidth
                onChange={handleChange}
              />
            </FormControl>

            {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                id={email.toString()}
                label="email"
                type="email"
                name="user_email"
                value=""
                onChange={handleChange}
                fullWidth
              />
            </FormControl> */}
          </Grid>

          {/* Password input */}
          <Grid
            container
            columns={1}
            spacing={2}
            sx={{ paddingTop: 0, paddingBottom: 2, justifyContent: "center" }}
          >
            <FormControl sx={{ m: 1, width: "25ch" }} >
              <InputLabel htmlFor="lname">Password</InputLabel>
              <OutlinedInput
                id="pw"
                defaultValue=""
                type="password"
                value={"".toString()}
                label="pw"
                fullWidth
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
           
            {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                id={pw.toString()}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="password"
              />
            </FormControl> */}
          </Grid>

          {/* buttons */}

          <Grid container spacing={1} justifyContent="center" paddingTop={4}>
            <RegisterButton aria-disabled={isPending} />
          </Grid>

          {/* 
Error messaging
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )} */}
        </div>
      </Container>
    </form>
  );
}
