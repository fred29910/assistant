import {
    createBrowserRouter,
} from "react-router-dom";
import { Router } from "@remix-run/router";

import ErrorPage from "./error-page";
import MainLayout from "./components/layout/Layout";
import Root from "./pages/root";

const router: Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Root />,
            },
        ]
    },
]);

export default router