import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BlueButton } from "@/app/lib/button-styles";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

function GoHomeButton() {
  return (
    <ThemeProvider theme={BlueButton}>
      <Button
        variant="outlined"
        size="large"
        type="Submit"
        startIcon={<HomeTwoToneIcon />}
        sx={{ pl: 2, pr: 2, pt: 3, pb: 3 }}
      >
        Go Home
      </Button>
    </ThemeProvider>
  );
}
export default GoHomeButton ;