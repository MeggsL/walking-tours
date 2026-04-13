import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BlueGreyButton } from "@/app/lib/button-styles";

function RegisterButton() {
return (
    <ThemeProvider theme={BlueGreyButton}>
      <Button type="submit" variant="contained" size="large" sx={{ pl: 4, pr: 4 }}>
        Register
      </Button>
    </ThemeProvider>
  );
}
export default RegisterButton ;