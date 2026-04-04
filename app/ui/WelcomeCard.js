import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { brown, amber, blue, green } from "@mui/material/colors";
import Image from "next/image";
import Stack from "@mui/material/Stack";

export default function WelcomeCard() {
  return (
    <Box sx={{ pl: 3 }}>
      <Card sx={{ minWidth: 275, mx: 2, padding: 2 }}>
        <CardContent>
 
          <Typography variant="body2" color={brown[800]}>
            On the next screen you will be offered a list of attractions that
            can be included on your tour. Once you have made your selections and
            hit the Start Tour button, your bespoke tour map will load.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            sx={{ pt: 3 }}
          >
            <Typography variant="body2" color={brown[800]}>
              Suggested routes are highlighted in{" "}
              <font color={blue[400]}>blue.</font> Tap on the markers for more
              information about the attraction at that location.
            </Typography>
            <Image
              src="/marker.png"
              alt="A custom map marker."
              width={43}
              height={52}
              priority
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 4, md: 6 }}
            justifyContent="center"
            sx={{ pt: 3 }}
          >
            <Typography variant="body2" color={brown[800]}>
              For more information on what the map symbols mean, tap the 
              <font color={green[400]}> info button</font> on the bottom navigation bar on the map pages.
            </Typography>
            <Image
              src="/info-button.png"
              alt="A custom map marker."
              width={54}
              height={54}
              priority
            />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 4, md: 6 }}
            justifyContent="center"
            sx={{ pt: 3 }}
          >
            <Typography variant="body2" color={brown[800]}>
              If ever you are feeling overwhelmed and need a break, hit the 
              <font color={brown[300]}> Break Time</font> button the bottom navigation bar on the map pages.
            </Typography>
            <Image
              src="/break-time.png"
              alt="Break Time button"
              width={54}
              height={54}
              priority
            />
          </Stack>

          <Typography
            sx={{ fontSize: 18, alignContent: "center" }}
            gutterBottom
            paddingTop={3}
            color={amber[600]}
          >
            Happy touring!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
