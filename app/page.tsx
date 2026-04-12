"use client";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SignInButton from "@/app/ui/buttons/sign-in-button";
import Stack from "@mui/material/Stack";
import LetsGoButton from "@/app/ui/buttons/lets-go-button";
import Grid from "@mui/material/Grid"; // Grid version 1
import "./globals.css";

export default function Homepage() {
  return (
    <div className="main">
      <Box xs={{ flexgrow: 1, height: "100%" }} className="body">
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            rowSpacing={3}
            paddingTop={12}
            justifyContent="center"
          >
            <Image
              src="/tours-of-belfast.png"
              alt="Toursof Belfast"
              width={356}
              height={200}
              priority
            />
          </Grid>
          <Grid
            container
            spacing={2}
            rowSpacing={3}
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

       <Box sx={{ width: "100%" }}>
                 <Stack
                   direction={{ xs: "row", sm: "row" }}
                   spacing={{ xs: 1, sm: 2, md: 4 }}
                   justifyContent="center"
                   sx={{ pt: 3 }}
                 >
                   <Grid paddingTop={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Link prefetch={true} href="/login">
                <SignInButton />
              </Link>
              </Grid>
              <Grid paddingTop={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Link href="/tours">
                <LetsGoButton />
              </Link>
               </Grid>
            </Stack>
         </Box>
        </Container>
      </Box>
    </div>
  );
}
