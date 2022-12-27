import { useQuery } from "@tanstack/react-query";
import { getGems } from "../../apis";
import { Grid } from "@mui/material";

const Gems = () => {
  const { isLoading, data, error } = useQuery(
    ["Gems"],
    () => getGems("수념s"),
    {
      staleTime: Infinity,
      retry: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid container width={"500px"}>
      {data !== null ? (
        data.Gems.map((el, idx) => (
          <Grid item key={idx} xs={12}>
            {/* <Grid>
              {el.Slot} ( {el.Grade} )
            </Grid> */}
            <Grid dangerouslySetInnerHTML={{ __html: el.Name }} />
            {/* <img src={el.Icon} alt={"사진"} /> */}
            <Grid>레벨 : {el.Level}</Grid>
            <Grid>{console.log(JSON.parse(el.Tooltip))}</Grid>
            {data.Effects.filter((gem) => gem.GemSlot === el.Slot)[0].Name} :
            {
              data.Effects.filter((gem) => gem.GemSlot === el.Slot)[0]
                .Description
            }
            <Grid>
              {console.log(
                JSON.parse(
                  data.Effects.filter(
                    (tooltip) => tooltip.GemSlot === el.Slot
                  )[0].Tooltip
                )
              )}
            </Grid>
          </Grid>
        ))
      ) : (
        <Grid>보석 없음</Grid>
      )}
    </Grid>
  );
};

export default Gems;
