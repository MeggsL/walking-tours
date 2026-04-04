import React from "react";
import Box from "@mui/material/Box";
import { Alert, IconButton, Collapse, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./openbox.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TheWeather from "./GetWeather";
import { blue } from "@mui/material/colors";
import WaterDropTwoToneIcon from "@mui/icons-material/WaterDropTwoTone";

export default function OpenBox() {
  const [open, setOpen] = useState(false);

  const ButtonColor = createTheme({
    palette: {
      primary: {
        main: blue[300],
      },
      secondary: {
        main: blue[600],
      },
    },
  });

  return (
    <div className="alertbox">
      <Box maxWidth={"80%"} alignContent={"center"}>
        <Collapse in={open}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <TheWeather />
          </Alert>
        </Collapse>
        <ThemeProvider theme={ButtonColor}>
          <Grid sx={{pt: 2, pl: 8}}>
            <Button
              disabled={open}
              variant="contained"
              sx={{ padding: 2 }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <WaterDropTwoToneIcon />
              Weather Check
            </Button>
          </Grid>
        </ThemeProvider>
      </Box>
    </div>
  );
}
