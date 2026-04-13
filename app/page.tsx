"use client";

import Image from "next/image";
import Link from "next/link";
//import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SignInButton from "@/app/ui/buttons/sign-in-button";
import Stack from "@mui/material/Stack";
import LetsGoButton from "@/app/ui/buttons/lets-go-button";
import Grid from "@mui/material/Grid"; // Grid version 1
import "./globals.css";

export default function Homepage() {
  return (
    <div className="selecttours">
      {/* <Box> */}
       <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "md",
          }}
        >
          <Stack spacing={6} alignItems="center">
            {/* <Grid container paddingTop={8}> */}
              <Image
                preload={false}
                loading="eager"
                src="/tours-of-belfast.png"
                alt="Tours of Belfast"
                width={356}
                height={200}
                priority
              />
            {/* </Grid> */}
            {/* <Grid
              container
              paddingTop={2}
              paddingBottom={2}
              columns={1}
      
            > */}
              <Image
                preload={false}
                loading="eager"
                src="/cranes356x194.png"
                alt="Samson and Goliath"
                width={356}
                height={194}
                priority
              />
            {/* </Grid> */}

            {/* the buttons */}
            <Grid
              container
              paddingTop={5}
              columns={2}
              columnSpacing={4}
            >
              <Link prefetch={true} href="/login">
                <SignInButton />
              </Link>

              <Link href="/tours">
                <LetsGoButton />
              </Link>
            </Grid>
            {/* empty grid to put out bottom of layout, extending background colour to bottof the screen */}
            {/* <Grid container columns={1} paddingTop={22} /> */}
          </Stack>
        </Container>
      {/* </Box> */}
    </div>
  );
}
