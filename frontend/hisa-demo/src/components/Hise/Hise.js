import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import HiseTable from "./HiseTable";

const Hise = () => {
    const [hise, setHise] = useState([]);
    useEffect(() => {
        const pridobiHise = () => {
            api.get("/hise").then((result) => {
                setHise(result.data);
                console.log(result);
            });
        }
        pridobiHise();
    }, []);
    return (
        <>
            <h1>Hise</h1>
            <Link to="/hise/dodaj"><Button variant="contained">Dodaj hišo</Button></Link>
            <HiseTable hise={hise} />
        </>
    );
}
export default Hise;