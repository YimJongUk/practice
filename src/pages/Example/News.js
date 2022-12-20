import { useQuery } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
import { getNoticeList } from "../../apis";

const News = () => {
  const { isLoading, data, error } = useQuery(["repoData"], getNoticeList, {
    staleTime: Infinity,
    retry: false,
  });

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
    <div>
      <div>
        {data.map((el) => (
          <div>
            <div>{el.Title}</div>
            <div>
              <img src={el.Thumbnail} style={{ width: "100px" }} />
            </div>
            <div>Link : {el.Link}</div>
            <div>StartDate : {el.StartDate}</div>
            <div>EndDate : {el.EndDate}</div>
            <div>RewardDate : {el.RewardDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
