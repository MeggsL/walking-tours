import Link from "next/link";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import StartTourButton from "@/app/lib/buttons/start-touring-button";
import GoHomeButton from "@/app/lib/buttons/go-home-button";
import { BuildingCard, StatuesCard, LandmarkCard } from "@/app/lib/buttons";


//the child component

export default function TourOptionsForm({ onSubmit }) {
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
      <Box sx={{ display: "flex" }}>
        <FormControl
          sx={{ m: 3 }}
          fullWidth="true"
          component="fieldset"
          variant="standard"
          required="true"
          margin="normal"
        >
          <Grid
            paddingTop={0}
            paddingBottom={2}
            alignItems={"center"}
            paddingLeft={0}
          >
            <FormLabel
              component="legend"
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: purple[600],
                textAlign: "center",
              }}
            >
              Please select at least one option.
            </FormLabel>
          </Grid>

          <FormGroup>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}>
                <Checkbox
                  checked={buildings}
                  onChange={handleChange}
                  name="buildings"
                  size="large"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <BuildingCard />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={statues}
                  onChange={handleChange}
                  name="statues"
                  size="large"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <StatuesCard />
              </Grid>

              <Grid item xs={2}>
                <Checkbox
                  checked={landmarks}
                  onChange={handleChange}
                  name="landmarks"
                  size="large"
                  sx={{
                    color: purple[800],
                    "&.Mui-checked": {
                      color: purple[600],
                    },
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <LandmarkCard />
              </Grid>
            </Grid>
          </FormGroup>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            sx={{ pt: 3 }}
          >
            <StartTourButton />
            <Link href="../../">
              <GoHomeButton />
            </Link>
          </Stack>
        </FormControl>
      </Box>
    </form>
  );
}
