
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
//import { roboto } from "../../fonts";


export default function MapInfoCard() {
  return (
    <Box sx={{ pl: 3 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom sx={{pt:2, mx:2}}>
            What do the symbols mean?
          </Typography>
          
          <Grid item xs={12} sx={{ mx: 15, pt: 2 }}>
            <span style={{ fontSize: "3rem" }}>🗿</span>
          </Grid>
          <Typography sx={{ mx: 7 }} variant="body2">
            Landmarks and monuments
          </Typography>

          <Grid item xs={12} sx={{ mx: 15, pt: 1 }}>
            <span style={{ fontSize: "3rem" }}>🗽</span>
          </Grid>
          <Typography sx={{ mx: 10 }} variant="body2">
            Statues and artworks
          </Typography>

          <Grid item xs={12} sx={{ mx: 15, pt: 4 }}>
            <span style={{ fontSize: "3rem" }}>🏛️</span>
          </Grid>
          <Typography sx={{ mx: 11 }} variant="body2">
            Historic buildings
          </Typography>

          <Grid item xs={12} sx={{ mx: 15, pt: 4 }}>
          <Image
                src="/blue-roads.png"
                alt="Suggested route are highlighted in blue."
                width={50}
                height={52}
                priority
              />
          </Grid>
          <Typography sx={{ mx: 6, textAlign: 'center', pt:2 }} variant="body2">
            Suggested tour routes are highlighted in blue.
          </Typography>

          <CardActions sx={{pt:4}}>
            <Link href="./">
              <Button size="small">Back to map</Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}