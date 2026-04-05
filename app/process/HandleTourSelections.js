"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import GetTourSelection from "./TourSelections.js";


//the parent component of the form process - receives the user tour selection from the child component and processes it to determine which tour to send the user to.

export default function HandleTourSelection({ onSubmit }) {
  const [state] = useState({}); // State for form data

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log("Form data submitted:", data);

    if (data.buildings && !data.statues && !data.landmarks) {
      window.location.href = "../tours/b";
    } else if (data.buildings && data.statues && !data.landmarks) {
      window.location.href = "../tours/b-s";
    } else if (data.buildings && data.statues && data.landmarks) {
      window.location.href = "../tours/b-l-s";
    } else if (data.statues && !data.landmarks && !data.buildings) {
      window.location.href = "../tours/s";
    } else if (data.statues && data.landmarks && !data.buildings) {
      window.location.href = "../tours/l-s";
    } else if (data.landmarks && !data.statues && !data.buildings) {
      window.location.href = "../tours/l";
    } else if (data.landmarks && data.buildings && !data.statues) {
      window.location.href = "../tours/b-l";
    } else {
      window.location.href = "../purpley-welcome/purpley-tours/tour-alert";
      console.log("That didn't work.");
    }
  };
  //code handling the page content styling
  return (
    <Box xs={{ flexgrow: 1, height: "100%" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        rowSpacing={0}
        paddingTop={6}
      >
        <Grid
          container
          spacing={2}
          rowSpacing={0}
          paddingTop={0}
          justifyContent="center"
        >
          <Image
            src="/pp-welcome-sub-title.png"
            alt="What would you like to see on your tour?"
            width={300}
            height={184}
            priority
          />
        </Grid>
        <Grid
          container
          spacing={2}
          rowSpacing={0}
          paddingTop={0}
          paddingBottom={0}
          justifyContent="center"
        >
          <GetTourSelection formData={state} onSubmit={handleFormSubmit} />
        </Grid>
        {/*} <OpenBox /> */}
      </Grid>
    </Box>
  );
}
