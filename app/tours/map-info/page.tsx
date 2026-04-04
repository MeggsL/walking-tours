import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MapInfoCard from "../../purple-components/PurpleyMapInfoCard";
import "../../../globals.css";

<html lang="en">
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Tours of Belfast</title>
  </head>
  <body></body>
</html>;

export default function PurpleMapInfo() {
  return (
    <div className="body">
    <Box sx={{width: 350, pt: 10  }}>
      <Grid
        item
        xs={12}
        sm={6}
        justifyContent="center"
        rowSpacing={0}
        padding={0}
   >
<MapInfoCard />
      </Grid>
    </Box>
    </div>
  );
}
