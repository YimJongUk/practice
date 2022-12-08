import { Outlet } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Wrapper;
