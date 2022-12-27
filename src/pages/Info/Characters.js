import { useQuery } from "@tanstack/react-query";
import { getCharacterInfo } from "../../apis";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Characters = () => {
  const { isLoading, data, error } = useQuery(
    ["Characters"],
    () => getCharacterInfo("수념s"),
    {
      staleTime: Infinity,
      retry: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>
        <div>
          {data.map((el, idx) => (
            <div key={idx}>
              <div>ServerName : {el.ServerName}</div>
              <div>CharacterName : {el.CharacterName}</div>
              <div>CharacterLevel : {el.CharacterLevel}</div>
              <div>CharacterClassName : {el.CharacterClassName}</div>
              <div>ItemAvgLevel : {el.ItemAvgLevel}</div>
              <div>ItemMaxLevel : {el.ItemMaxLevel}</div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Characters;
