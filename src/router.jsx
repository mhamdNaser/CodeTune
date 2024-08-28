import { Navigate, createBrowserRouter } from "react-router-dom";
import SiteLayout from "./Site/Components/SiteLayout";
import Index from "./Site/Pages/LandPage/Index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children:[
      {
        path: "/home",
        element: <Index />
      }
    ]
  },
]);

export default router;
