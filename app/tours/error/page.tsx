"use client";
import BottomNav from "@/app/ui/bottom-nav";
import TryAgainButton from "@/app/ui/buttons/try-again-button";
import Container from "@mui/material/Container";
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Image from "next/image";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function TryAgain() {
  return (
    <div className="oops-text-box">
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
              src="/oops.png"
              alt="Oops! You forgot to make a selection."
              width={356}
              height={164}
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
            <div className="oops-text">
              You forgot to choose what you want to see on your tour before
              starting.
            </div>
          </Grid>

          <Box sx={{ width: "100%" }}>
            <Stack
              direction={{ xs: "row", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent="center"
              sx={{ pt: 3 }}
            >
              <Grid
                paddingTop={2}
                paddingBottom={5}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Link href="/tours">
                  <TryAgainButton />
                </Link>
              </Grid>
            </Stack>

            <Grid paddingTop={40} paddingBottom={3}>
              <BottomNav />
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
