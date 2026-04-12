"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../globals.css";
import BottomNavMaps from "../../ui/bottom-nav";
import MapOfLandmarksAndStatues from "../../lib/(maps)/Map-LS";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function MapOfLandS() {
  return (
    <Box>
      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
      >
        <MapOfLandmarksAndStatues/>
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
