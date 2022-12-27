import { useQuery } from "@tanstack/react-query";
import { getEquipment } from "../../apis";
import { Grid } from "@mui/material";

const Equipment = () => {
  const {
    isLoading,
    data: equip,
    error,
  } = useQuery(["Equipment"], () => getEquipment("수념s"), {
    staleTime: Infinity,
    retry: false,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Grid container width={"500px"}>
        {equip.map((el, idx) => (
          <Grid item xs={12} key={idx}>
            <Grid>
              {el.Type} : {el.Name} / {el.Grade}
              {/* <img src={el.Icon} alt={"사진"} /> */}
            </Grid>
            <Grid>{console.log(JSON.parse(el.Tooltip))}</Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Equipment;
