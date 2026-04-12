import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BlueButton } from "@/app/lib/button-styles";

//the button to sign into user account
function LogInButton() {
  return (
    <ThemeProvider theme={BlueButton}>
        <Button variant="outlined" size="large" sx={{ pl: 4, pr: 4 }}>
       Log in
      </Button>
    </ThemeProvider>
  );
}
export default LogInButton ;