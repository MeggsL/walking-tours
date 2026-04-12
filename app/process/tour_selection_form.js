"use client";
//import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
//import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Image from "next/image";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { roboto } from "../ui/fonts";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import StartTourButton from "../ui/buttons/start-touring-button";

//the child component - get user tour selection and submit to parent component for processing

export default function GetTourSelection({ onSubmit }) {
  const [state, setState] = useState({
    buildings: false,
    statues: false,
    landmarks: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { buildings, statues, landmarks } = state;
  const error = [buildings, statues, landmarks].filter((v) => v).length !== 2;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected attractions:", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="selecttours"> */}
      <Box sx={{ flexGrow: 1 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "md",
          }}
        >
          <Stack spacing={3} alignItems="left">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <Grid container spacing={2} wrap="wrap">
                <Grid size={3}>
                  <Checkbox
                    checked={buildings}
                    onChange={handleChange}
                    name="buildings"
                    size="large"
                    sx={{
                      color: blueGrey[800],
                      "&.Mui-checked": {
                        color: blue[800],
                      },
                    }}
                  />
                </Grid>
                <Grid size={7}>
                  <div
                    style={{
                      color: grey[800],
                      fontSize: "30px",
                      fontWeight: "400",
                      font: roboto.style.fontFamily,
                    }}
                  >
                    Buildings
                    {/* <BuildingCard /> */}
                  </div>
                </Grid>
              </Grid>
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <Grid container spacing={2}>
                <Grid size={3}>
                  <Checkbox
                    checked={statues}
                    onChange={handleChange}
                    name="statues"
                    size="large"
                    sx={{
                      color: blueGrey[800],
                      "&.Mui-checked": {
                        color: blue[800],
                      },
                    }}
                  />
                </Grid>
                <Grid size={7}>
                  <div
                    style={{
                      color: grey[800],
                      fontSize: "30px",
                      fontWeight: "400",
                      font: roboto.style.fontFamily,
                    }}
                  >
                    Statues
                    {/* <StatuesCard /> */}
                  </div>
                </Grid>
              </Grid>
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <Grid container spacing={5}>
                <Grid size={3}>
                  <Checkbox
                    checked={landmarks}
                    onChange={handleChange}
                    name="landmarks"
                    size="large"
                    sx={{
                      color: blueGrey[800],
                      "&.Mui-checked": {
                        color: blue[800],
                      },
                    }}
                  />
                </Grid>
                <Grid size={7}>
                  <div
                    style={{
                      color: grey[800],
                      fontSize: "30px",
                      fontWeight: "400",
                      font: roboto.style.fontFamily,
                    }}
                  >
                    Landmarks
                    {/* <LandmarkCard /> */}
                  </div>
                </Grid>
              </Grid>
            </FormControl>
        
                <StartTourButton />
  
          </Stack>
        </Container>
      </Box>
      {/* </div> */}
    </form>
  );
}
