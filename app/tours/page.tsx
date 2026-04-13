"use client";

import "../globals.css";
import "../page.module.css";
import HandleTourSelection from "../process/HandleTourSelection";
//import Image from "next/image";
import Container from "@mui/material/Container";
//import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";
//import Typography from "@mui/material/Typography";
import BottomNav from "@/app/ui/bottom-nav";
import { Suspense } from "react";
//import StartTouring from "@/app/ui/StartTouring";
//import TopMenu from '@/app/ui/top-nav'

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function TakeATour() {
  return (
    <div className="selecttours">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "md",
        }}
      >
        <Stack spacing={0} alignItems="center">

          <Grid container paddingTop={2} columns={1} columnSpacing={4}>
            <Suspense>
              <HandleTourSelection />
            </Suspense>
          </Grid>

          <Stack useFlexGap>
            <BottomNav />
          </Stack>

        </Stack>
      </Container>
    </div>
  );
}
