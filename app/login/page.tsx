import LoginForm from "@/app/ui/login-form";
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
        <Stack spacing={0} sx={{ alignItems: "center" }}>
          <Grid container sx={{ paddingTop: 5 }}>
            <Suspense>
              <LoginForm />
            </Suspense>
          </Grid>

          <Stack sx={{ display: "flex", gap: 1 }}>
            <BottomNav />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
