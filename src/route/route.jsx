import { createBrowserRouter } from "react-router-dom";
import TotalPage from "../pages";
import Page1Q from "../pages/가독성/page1";
import Page2Q from "../pages/관심사/page2-1";
import JoinPage from "../pages/관심사/page2-2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TotalPage />,
  },
  {
    path: "/1",
    element: <Page1Q />,
  },
  {
    path: "/2",
    element: <Page2Q />,
  },
  {
    path: "/2-2",
    element: <JoinPage />,
  },
]);
export default router;
