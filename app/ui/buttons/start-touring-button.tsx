import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BlueButton } from "@/app/lib/button-styles";
import PlayCircleFilledWhiteTwoToneIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";

function StartTourButton() {
 return (
    <ThemeProvider theme={BlueButton}>
      <Button
        variant="contained"
        size="large"
        type="Submit"
        startIcon={<PlayCircleFilledWhiteTwoToneIcon />}
        sx={{ pl: 2, pr: 2, pt: 3, pb: 3 }}
      >
        Start Tour
      </Button>
    </ThemeProvider>
  );
}
export default StartTourButton;