"use client";

import * as React from "react";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/login_action";
import { useSearchParams } from "next/navigation";
import { OutlinedInput } from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";
import LogInButton from "./buttons/log-in-button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "../globals.css";

export default function LoginForm() {
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

  return (
    <form action={formAction}>
      <Container maxWidth="md" fixed>
        <div style={{ alignItems: "center", height: "86dvh", width: "100" }}>
          <Stack spacing={5} paddingTop={14} alignItems="center">
            <Image
              preload={false}
              loading="eager"
              src="/bg-welcome.png"
              alt="Welcome to your tour!"
              width={356}
              height={164}
              placeholder="empty"
            />

            <Typography variant="h6" gutterBottom align="center">
              Please log in to continue.
            </Typography>
          </Stack>

          <Grid
            container
            columns={1}
            spacing={1}
            paddingTop={1}
            paddingBottom={0}
            justifyContent="center"
          >
            {/* Email input */}
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                id="email"
                // startAdornment={
                //   <InputAdornment position="start">
                //     <AccountCircle />
                //     Email
                //   </InputAdornment>
                // }
                label="Email"
              />
            </FormControl>
          </Grid>

          <Grid
            container
            columns={1}
            spacing={2}
            paddingTop={0}
            paddingBottom={2}
            justifyContent="center"
          >
            {/* Password input */}

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
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
                label="Password"
              />
            </FormControl>
          </Grid>

          {/* buttons */}

          <Grid container spacing={5} justifyContent="center" paddingTop={4}>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <LogInButton aria-disabled={isPending} />
          </Grid>

          <Grid container spacing={1} justifyContent="center" paddingTop={6}>
            <Typography variant="h6" gutterBottom align="center">
              <Link prefetch={true} href="/register">
                Not registered? Tap here.
              </Link>
            </Typography>
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
