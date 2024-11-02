import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/layout";
import PageNotFound from "../pages/pageNotFound";
import LazyLoader from "./lazyLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LazyLoader page="headlines" />} />
      <Route path="/all-news" element={<LazyLoader page="news" />} />
      <Route path="/my-feed" element={<LazyLoader page="myFeed" />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const Index = () => <RouterProvider router={router} />;

export default Index;
