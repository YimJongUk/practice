import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import Main from "../pages/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route index element={<Main />} />
    </Route>
  ),
  { basename: process.env.PUBLIC_URL }
);

const RouterSample = () => {
  return <RouterProvider router={router} />;
};

export default RouterSample;
