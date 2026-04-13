"use client";
//import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
//import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { roboto } from "../ui/fonts";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import StartTourButton from "../ui/buttons/start-touring-button";
import Typography from "@mui/material/Typography";

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
      <Container maxWidth="md" fixed>
        <div style={{ alignItems: "center", height: "86dvh", width: "100" }}>
          <Stack spacing={3} paddingTop={6} alignItems="center">
            <Image
              src="/tours-of-belfast.png"
              alt="Welcome to your tour!"
              width={356}
              height={200}
              priority
            />

            <Typography
              variant="h6"
              gutterBottom
              align="center"
              color="white"
              noWrap={false}
            >
              Please select what you would like to see on your tour.
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              color="white"
            >
              You can select one or all options at once.
            </Typography>
    

          {/* buildings selection input */}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <Grid container spacing={2} wrap="wrap">
              <Grid size={3}>
                <Checkbox
                  checked={buildings}
                  onChange={handleChange}
                  name="buildings"
                  size="large"
                  sx={{
                    color: grey[100],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
              </Grid>
              <Grid size={7}>
                <div
                  style={{
                    color: grey[100],
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

          {/* statues selection input */}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <Grid container spacing={2}>
              <Grid size={3}>
                <Checkbox
                  checked={statues}
                  onChange={handleChange}
                  name="statues"
                  size="large"
                  sx={{
                    color: grey[100],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
              </Grid>
              <Grid size={7}>
                <div
                  style={{
                    color: grey[100],
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

          {/* landmarks selection input */}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <Grid container spacing={5}>
              <Grid size={3}>
                <Checkbox
                  checked={landmarks}
                  onChange={handleChange}
                  name="landmarks"
                  size="large"
                  sx={{
                    color: grey[100],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
              </Grid>
              <Grid size={7}>
                <div
                  style={{
                    color: grey[100],
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
      </Stack>
          {/* start tour button */}
          <Grid container spacing={3} justifyContent="center" paddingTop={6}>
            <StartTourButton />
          </Grid>
        </div>
      </Container>
    </form>
  );
}
