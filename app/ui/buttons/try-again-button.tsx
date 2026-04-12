import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { GreyButton } from "@/app/lib/button-styles";

//the button to sign into user account
function TryAgainButton() {
  return (
    <ThemeProvider theme={GreyButton}>
        <Button variant="outlined" size="large" sx={{ pl: 4, pr: 4 }}>
      Try Again
      </Button>
    </ThemeProvider>
  );
}
export default TryAgainButton ;