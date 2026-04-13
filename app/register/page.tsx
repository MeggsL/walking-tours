import RegistrationForm from "@/app/process/RegisterForm";
import { Suspense } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Stack from "@mui/material/Stack";
import BottomNav from "@/app/ui/bottom-nav";
import "../globals.css";

export default function LoginPage() {
  return (
    <div className="login-box">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "md",
        }}
      >
        <Stack spacing={0} alignItems="center">
          <Grid container paddingTop={5} columns={1} columnSpacing={4}>
            <Suspense>
              <RegistrationForm />
            </Suspense>
          </Grid>

          <Stack useFlexGap>
            <BottomNav />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
