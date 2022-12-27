import { Container } from "@mui/system";
import News from "./News/News";
import Profiles from "./Info/Profiles";
import { Box } from "@mui/material";

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

const Main = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box sx={{ bgcolor: "#15181D", color: "#fff" }}>
          <News />
          <Profiles />
        </Box>
      </Container>
    </>
  );
};

export default Main;
