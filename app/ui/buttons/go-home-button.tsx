import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { PurpleButton } from "@/app/lib/buttons";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

function GoHomeButton() {
  return (
    <ThemeProvider theme={PurpleButton}>
      <Button
        variant="contained"
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