"use client";
import MapOfBuildings from "../../lib/(maps)/MapOfBuildings";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../globals.css";
import BottomNavMaps from "../../ui/BottomNavMaps";


export default function MapOfBs() {
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
        <MapOfBuildings />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
