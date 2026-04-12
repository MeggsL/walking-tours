import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
//import Image from "next/image";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "../globals.css";
//import LogInButton from "../ui/buttons/log-in-button";

export default function LoginPage() {
  return (
         <div className="selecttours">
    <Box>
      {/* <div className=".login-box"> */}
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "lg",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Suspense>
              <LoginForm />
            </Suspense>
          </Stack>
        </Container>
   
    </Box>
       </div>
  );
}
