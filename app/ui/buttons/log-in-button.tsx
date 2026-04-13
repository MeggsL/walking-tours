import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BlueGreyButton } from "@/app/lib/button-styles";

//the button to sign into user account
function LogInButton() {
  return (
    <ThemeProvider theme={BlueGreyButton}>
        <Button type="submit" variant="contained" size="large" sx={{ pl: 4, pr: 4 }}>
       Log in
      </Button>
    </ThemeProvider>
  );
}
export default LogInButton ;