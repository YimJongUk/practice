import { useQuery } from "@tanstack/react-query";
import { getAvatars } from "../../apis";

const Avatars = () => {
  const { isLoading, data, error } = useQuery(
    ["Avatas"],
    () => getAvatars("평온한바람"),
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
        {data.map((el, idx) => (
          <div key={idx}>
            <div>
              {el.Type} : {el.Name} / {el.Grade}
              {/* <img src={el.Icon} alt={"사진"} /> */}
              {/* {console.log(el.IsSet)}
              {console.log(el.IsInner)} */}
            </div>
            <div>{console.log(JSON.parse(el.Tooltip))}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Avatars;
