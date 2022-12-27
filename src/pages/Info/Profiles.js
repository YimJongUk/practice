import { useQuery } from "@tanstack/react-query";
import { getArmorProfiles } from "../../apis";
import Grid from "@mui/material/Unstable_Grid2";
import SpecChk from "./SpecChk";
import Characters from "./Characters";

const Profiles = () => {
  const { isLoading, data, error } = useQuery(
    ["Profiles"],
    () => getArmorProfiles("수념s"),
    {
      staleTime: Infinity,
      retry: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Grid container alignItems={"center"}>
        <Grid item xs={4} textAlign={"center"} sx={{ marginBottom: "50px" }}>
          <img
            src={data.CharacterImage}
            alt={"캐릭터사진"}
            style={{
              width: "80%",
              height: "80%",
              minWidth: "300px",
              minHeight: "350px",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <SpecChk />
        </Grid>
      </Grid>
    </>
  );
};

export default Profiles;
