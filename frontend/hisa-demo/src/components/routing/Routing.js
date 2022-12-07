import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Hise from "../Hise/Hise";
import PageNotFound from "../PageNotFound/PageNotFound";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Hise />} />
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    );
}