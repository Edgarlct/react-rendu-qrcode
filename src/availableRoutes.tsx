import React from "react";
import App from "./App";
import {Route, Routes} from "react-router-dom";
// import view for the router
import HomeView from "./views/Home/HomeView";
import QrCodeList from "./views/QrCode/list/QrCodeList";
import QrCodeAdd from "./views/QrCode/add/addQrCode";

export default function AvailableRoutes() {
    return <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" element={<HomeView/>}></Route>
            <Route path="qr/code/">
                <Route path="" element={<QrCodeList/>}></Route>
                <Route path="add" element={<QrCodeAdd/>}></Route>
            </Route>
        </Route>
        <Route path="*" element={<div>404</div>}></Route>
    </Routes>
}
