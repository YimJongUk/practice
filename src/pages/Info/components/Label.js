import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Label = ({ label, contents }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Typography>{label}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography>{contents}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Label;
