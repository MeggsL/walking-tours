'use client";'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../globals.css";
import BottomNavMaps from "../../ui/BottomNavMaps";
import MapOfBuildingsAndLandmarks from "../../lib/(maps)/Map-BL";

export default function MapOfBandL() {
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
        <MapOfBuildingsAndLandmarks />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
