import { createBrowserRouter } from "react-router-dom";
import TotalPage from "../pages";
import Page2Q from "../pages/관심사/page2-1";
import JoinPage from "../pages/관심사/page2-2";
import Page4Q from "../pages/재사용/page1";
import Page1Q from "../pages/가독성/page1-1";
import Page3Q from "../pages/최적화/page3-1";

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
  {
    path: "/3",
    element: <Page3Q />,
  },
  {
    path: "/4",
    element: <Page4Q />,
  },
]);
export default router;
