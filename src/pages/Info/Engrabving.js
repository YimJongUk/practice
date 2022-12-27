import { useQuery } from "@tanstack/react-query";
import { getEngrabving } from "../../apis";
import { Grid } from "@mui/material";

const Engrabving = () => {
  const { isLoading, data, error } = useQuery(
    ["Engrabving"],
    () => getEngrabving("수념s"),
    {
      staleTime: Infinity,
      retry: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid container width={"500px"}>
      {/* 장착된 각인 정보
      <Grid item container>
        {data.Engravings.map((el, idx) => (
          <Grid item key={idx}>
            <Grid>
              {el.Slot} : {el.Name}
            </Grid>
            {<img src={el.Icon} alt={"사진"} /> }
            <Grid>{console.log(JSON.parse(el.Tooltip))}</Grid>
          </Grid>
        ))}
      </Grid> */}
      <Grid item container>
        {data.Effects.map((el, idx) => (
          <Grid item key={idx}>
            <Grid>{el.Name}</Grid>
            <Grid>{el.Description}</Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Engrabving;
