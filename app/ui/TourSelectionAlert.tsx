"use client";

import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Grid from "@mui/material/Grid";
import Image from "next/image";

// setting the font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

//creating a bluey button
function GoBackButton() {
  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: purple[900],
      },
      secondary: {
        main: purple[500],
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={ButtonColor}>
      <Button
        variant="outlined"
        size="large"
        type="button"
        sx={{ m: 1, pl: 3, pr: 3, pt: 2, pb: 2 }}
      >
        Go Back
      </Button>
    </ThemeProvider>
  );
}
export { GoBackButton };

export default function YouMustSelect() {
  return (
    <Box maxWidth={"100%"} alignContent={"center"} sx={{ pl: 2, mx: 4, my: 4 }}>
      <Stack sx={{ width: "100%" }} spacing={3}>
        <Alert severity="error" onClose={() => {}}>
          <AlertTitle>Do you want to see interesting things?</AlertTitle>
          You must select at least one tour option!
          <br />
          <Grid sx={{ pt: 3, mx: 0 }}>
            <Link href="./">
              <Image
                src="/img/yelling-speaker.png"
                alt="How dare you!"
                width={300}
                height={280}
                priority
              />
            </Link>
          </Grid>
          <Grid sx={{ pt: 3, mx: 2 }}>
            <Link href="./">
              <GoBackButton />
            </Link>
          </Grid>
        </Alert>
      </Stack>
    </Box>
  );
}