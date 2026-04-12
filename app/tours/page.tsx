"use client";

import "../globals.css";
import "../page.module.css";
import HandleTourSelection from "../process/handle_tour_selection";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
    // <div className="body">
     <div className="selecttours">
        <Box>
                {/* <div className=".login-box"> */}
        {/* <Box sx={{ flexGrow: 1 }}> */}
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "md",
            }}
          >
            <Stack spacing={4} alignItems="center">
        
                <Image
                  src="/tours-of-belfast.png"
                  alt="Welcome to your tour!"
                  width={356}
                  height={200}
                  priority
                />
           
              <Typography variant="h6" gutterBottom align="center">
                Please select what you would like to see on your tour.
              </Typography>

              <Typography variant="subtitle1" gutterBottom align="center">
                You can select one or all options at once.
              </Typography>

              <Stack>
                <HandleTourSelection />
              </Stack>
            </Stack>
          </Container>
        
        </Box>
      </div>
    // </div>
  );
}
