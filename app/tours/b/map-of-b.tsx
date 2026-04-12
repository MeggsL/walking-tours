"use client";
import MapOfBuildings from "../../lib/(maps)/MapOfBuildings";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "../../globals.css";
import BottomNav from "../../ui/bottom-nav";

export default function MapOfBs() {
  return (
    <Box>
      <Stack spacing={2}
       useFlexGap>
        <MapOfBuildings />
      </Stack>
      <Stack useFlexGap>
        <BottomNav />
        </Stack>
    </Box>
  );
}
