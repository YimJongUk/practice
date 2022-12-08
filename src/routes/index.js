import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Wrapper from "../pages/Wrapper";
import News from "../pages/Example/News";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route index element={<News />} />
    </Route>
  )
);

const RouterSample = () => {
  return <RouterProvider router={router} />;
};

export default RouterSample;
