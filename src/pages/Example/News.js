import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getNoticeList } from "../../apis";
import styles from "./Counter.module.css";

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

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/ex2">
          <button className={styles.button}>다음</button>
        </Link>
      </div>
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
