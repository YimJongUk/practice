import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styles from "./Counter.module.css";
import { Link } from "react-router-dom";
import { getTaskRequestWorker } from "../../apis/counterAPI";

export function QueryExample3() {
  const queryClient = new useQueryClient();
  const result = useQuery(["Worker"], () => getTaskRequestWorker("0001"), {
    staleTime: Infinity,
  });

  const result2 = useQuery(["Worker"], () => getTaskRequestWorker("0002"), {
    staleTime: Infinity,
  });

  const onClick = () => {
    const result3 = queryClient.getQueryData(["Worker"]);

    console.log(result3);
  };

  const onfetchClick = async () => {
    await queryClient.prefetchQuery(["Worker"], () =>
      getTaskRequestWorker("0002")
    );
  };

  const onQueryClick = async () => {
    const data = await queryClient.fetchQuery(["Worker"], () =>
      getTaskRequestWorker("0001")
    );

    console.log("fetchQuery return : ", data);
  };

  if (result.isLoading || result2.isLoading) return;

  console.log("result data : ", result.data);
  console.log("result2 data : ", result2.data);

  return (
    <div>
      <div className={styles.row}>
        <div>
          {result.data.map((el, idx) => (
            <div key={idx}>
              <span>{el.Skey}</span>
              <span>{el.Sname}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/ex5">
          <button className={styles.button}>다음</button>
        </Link>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className={styles.button} onClick={onClick}>
          getQueryData 요청
        </button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className={styles.button} onClick={onfetchClick}>
          prefetchQuery
        </button>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className={styles.button} onClick={onQueryClick}>
          fetchQuery
        </button>
      </div>
    </div>
  );
}
