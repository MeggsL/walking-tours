import React from "react";
import PurpleMapOfBuildings from "../../purple-components/PurpleMapOfBuildings";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../globals.css";
import BottomNavMaps from "../../purple-components/PurpleyBottomNavMaps";


export default function PurpleMapOfBs() {
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
        <PurpleMapOfBuildings />
      </Grid>
      <Grid paddingBottom={3}>
        <BottomNavMaps />
      </Grid>
    </Box>
  );
}
