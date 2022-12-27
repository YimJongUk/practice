import { useQuery } from "@tanstack/react-query";
import { getCards } from "../../apis";
import { Grid } from "@mui/material";

const Cards = () => {
  const { isLoading, data, error } = useQuery(
    ["Cards"],
    () => getCards("수념s"),
    {
      staleTime: Infinity,
      retry: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid container width={"500px"}>
      {data.Cards.map((el, idx) => (
        <Grid item xs={12} key={idx}>
          <Grid>
            {el.Slot} : {el.Name} ( {el.Grade} )
          </Grid>
          {/* <img src={el.Icon} alt={"사진"} /> */}
          <Grid>
            각성횟수 : {el.AwakeCount} / {el.AwakeTotal}
          </Grid>
          <Grid>{console.log(JSON.parse(el.Tooltip))}</Grid>
        </Grid>
      ))}
      {data.Effects.map((el, idx) => (
        <Grid key={el.Index}>
          <Grid>카드 적용중인 슬롯 : {el.CardSlots.toString()}</Grid>
          <Grid>
            세트효과
            <br />
            {el.Items.length > 0 &&
              el.Items.map((set, idx) => <Grid key={idx}>{set.Name}</Grid>)}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
