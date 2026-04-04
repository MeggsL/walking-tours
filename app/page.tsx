"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { roboto } from "@/app/lib/fonts";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LetsGoButton from "@/app/lib/buttons/lets-go-button";
import Grid from "@mui/material/Grid"; // Grid version 1
//import "../purple.css";
import "./globals.css";
import { purple } from "@mui/material/colors";


//the button for the soothing lilac experience
function SigninButton() {
  const SignInButtonColor = createTheme({
    palette: {
      primary: {
        main: purple[400],
      },
      secondary: {
        main: purple[600],
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={SignInButtonColor}>
      <Button variant="contained" size="large" sx={{ pl: 4, pr: 4 }}>
        Sign In
      </Button>
    </ThemeProvider>
  );
}

//exporting the buttons
export { SigninButton };


export default function Homepage() {
  return (
    <div className="purpletours">
      <Box xs={{ flexgrow: 1, height: "100%" }} className="body">
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            rowSpacing={3}
            item
            xs={12}
            paddingTop={12}
            justifyContent="center"
          >
            <Image
              src="/home-title.png"
              alt="Tour of Belfast"
              width={356}
              height={200}
              priority
            />
          </Grid>
          <Grid
            container
            spacing={2}
            rowSpacing={3}
            item
            xs={12}
            paddingTop={6}
            paddingBottom={2}
            justifyContent="center"
          >
            <Image
              src="/cranes356x194.png"
              alt="Samson and Goliath"
              width={356}
              height={194}
              priority
            />
          </Grid>

          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            rowSpacing={-5}
            paddingTop={4}
          >
            <Stack direction="row" spacing={2}>
              <Link href="/signin">
                <SigninButton />
              </Link>
              <Link href="/tours">
                <LetsGoButton />
              </Link>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            rowSpacing={-5}
            paddingTop={3}
            paddingBottom={6}
          ></Grid>
        </Container>
      </Box>
    </div>
  );
}
