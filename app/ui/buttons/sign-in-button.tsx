import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { GreyButton } from "@/app/lib/button-styles";

//the button to sign into user account
function SignInButton() {
  return (
    <ThemeProvider theme={GreyButton}>
        <Button variant="outlined" size="large" sx={{ pl: 4, pr: 4 }}>
       Sign in
      </Button>
    </ThemeProvider>
  );
}
export default SignInButton ;