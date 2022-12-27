import { useQuery } from "@tanstack/react-query";
import { getNoticeList } from "../../apis";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const News = () => {
  const { isLoading, data, error } = useQuery(["News"], getNoticeList, {
    staleTime: Infinity,
    retry: false,
  });

  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  // const count = useSelector((state) => state.counterQuery.value);
  // const dispatch = useDispatch();

  // const response = useMutation((amount) => fetchCount(amount), {
  //   onSuccess: ({ data }) => {
  //     dispatch(incrementByAmount(data));
  //   },
  // });

  // console.log("isLoading : ", response.isLoading);
  // console.log("status    : ", response.status);
  // console.log("data      : ", response.data);

  // const onfetchClick = async () => {
  //   await queryClient.prefetchQuery(["Worker"], () =>
  //     getTaskRequestWorker("0002")
  //   );
  // };

  // const onQueryClick = async () => {
  //   const data = await queryClient.fetchQuery(["Worker"], () =>
  //     getTaskRequestWorker("0001")
  //   );

  //   console.log("fetchQuery return : ", data);
  // };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Accordion expanded={expanded} onChange={() => handleChange()}>
        <AccordionSummary>
          <Typography>뉴스</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {data.map((el, idx) => (
              <Grid item container xs={12} key={idx} alignItems={"center"}>
                <Grid item xs={12} sm={2}>
                  <img
                    src={el.Thumbnail}
                    style={{ width: "100px" }}
                    alt={"썸네일"}
                  />
                </Grid>

                <Grid item xs={12} sm={10}>
                  {el.Title}
                </Grid>

                {/* <Grid item container direction="column">
              <Grid item>
                <Typography>Link : {el.Link}</Typography>
                <Typography>StartDate : {el.StartDate}</Typography>
                <Typography>EndDate : {el.EndDate}</Typography>
                <Typography>RewardDate : {el.RewardDate}</Typography>
              </Grid>
            </Grid> */}
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default News;
