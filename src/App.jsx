import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {HomePage} from "./pages/HomePage.jsx";
import {TriviaPage} from "./pages/TriviaPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/trivia/:category",
        element: <TriviaPage/>,
    }
]);
const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;