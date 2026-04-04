import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { roboto } from "@/app/lib/fonts";

const BuildingCard = () => {
  return (
    <Image
      src="/selection-card-buildings.png"
      alt="Tour of Belfast"
      width={280}
      height={236}
      priority
    />
  );
};

const StatuesCard = () => {
  return (
    <Image
      src="/selection-card-statues.png"
      alt="Tour of Belfast"
      width={280}
      height={236}
      priority
    />
  );
};

const LandmarkCard = () => {
  return (
    <Image
      src="/selection-card-monuments.png"
      alt="Tour of Belfast"
      width={280}
      height={236}
      priority
    />
  );
};

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


export { BuildingCard, StatuesCard, LandmarkCard, PurpleButton };

