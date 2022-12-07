import React, { useEffect, useState } from "react";
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
            <HiseTable hise={hise} />
        </>
    );
}
export default Hise;