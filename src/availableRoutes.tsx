import React from "react";
import App from "./App";
import {Route, Routes} from "react-router-dom";
// import view for the router
import HomeView from "./views/Home/HomeView";

export default function AvailableRoutes() {
    return <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" element={<HomeView/>}></Route>
        </Route>
    </Routes>
}
