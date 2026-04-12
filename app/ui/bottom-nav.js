"use client";

import React from "react";
import "../globals.css";
import "../page.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RouteTwoToneIcon from "@mui/icons-material/RouteTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";
import HelpOutlineTwoToneIcon from "@mui/icons-material/HelpOutlineTwoTone";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);


  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "10vh"}} marginLeft={0} marginBottom={2} alignContent={"center"} alignItems={"center"}>
        <BottomNavigation
          showLabels
          className={"MuiBottomNavigation-root"}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          [home]
          <BottomNavigationAction
            label="Home"
            icon={
              <Link href={"../../../"}>
                <HomeTwoToneIcon />
              </Link>
            }
          />
          [tour home]
          <BottomNavigationAction
            label="Info"
            icon={
              <Link href={"./map-info"}>
                <HelpOutlineTwoToneIcon />
              </Link>
            }
          />
          [map information]
          <BottomNavigationAction
            label="Tours"
            icon={
              <Link href={"./"}>
                <RouteTwoToneIcon />
              </Link>
            }
          />
          [weather]
          <BottomNavigationAction
            label="Weather"
            icon={
              <Link href={"../../weather"}>
                <WbSunnyTwoToneIcon />
              </Link>
            }
          />
                [account]
          <BottomNavigationAction
            label="Account"
            icon={
              <Link href={"../../login"}>
                <AccountCircleTwoToneIcon />
              </Link>
            }
          />
        </BottomNavigation>
      </Box>
    </React.Fragment>
  );
}
