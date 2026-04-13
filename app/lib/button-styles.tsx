//import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import { blueGrey, purple, blue, grey } from "@mui/material/colors";
import { roboto } from "@/app/ui/fonts";

// image components for tour selection cards. Could be used on the tour selection page and also on the tour summary page to show the user what they selected for their tour.

// const BuildingCard = () => {
//   return (
//     <Image
//       src="/selection-card-buildings.png"
//       alt="Tour of Belfast"
//       width={280}
//       height={236}
//       priority
//     />
//   );
// };

// const StatuesCard = () => {
//   return (
//     <Image
//       src="/selection-card-statues.png"
//       alt="Tour of Belfast"
//       width={280}
//       height={236}
//       priority
//     />
//   );
// };

// const LandmarkCard = () => {
//   return (
//     <Image
//       src="/selection-card-monuments.png"
//       alt="Tour of Belfast"
//       width={280}
//       height={236}
//       priority
//     />
//   );
// };

//function PurpleContainedButton() {
  const PurpleButton = createTheme({
    palette: {
      primary: {
        main: purple[400],
      },
      secondary: {
        main: purple[600],
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  //function BlueGreyOutlinedButton() {
  const BlueGreyButton = createTheme({
    palette: {
      primary: {
        main: blueGrey[800],
      },
      secondary: {
        main: blueGrey[600],
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

    //function BlueOutlinedButton() {
  const BlueButton = createTheme({
    palette: {
      primary: {
        main: blue[600],
      },
      secondary: {
        main: blue[600],
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

    //function GreyOutlinedButton() {
  const GreyButton = createTheme({
    palette: {
      primary: {
        main: grey[200],
      },
      secondary: {
        variant: "contained",
        main: grey[600],
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });



export { PurpleButton, BlueGreyButton, BlueButton, GreyButton };

