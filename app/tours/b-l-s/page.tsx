'use client";'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../globals.css";
import BottomNavMaps from "../../ui/BottomNavMaps";
import MapAll from "../../lib/(maps)/Map-BLS";

export default function MapOfBandLandS() {
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
        <MapAll />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
