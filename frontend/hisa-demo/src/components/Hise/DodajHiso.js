
import { Button, Checkbox, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const DodajHiso = () => {
    const [hisnaStevilka, setHisnaStevilka] = useState(0);
    const [naslov, setNaslov] = useState("");
    const [velikost, setVelikost] = useState(0);
    const [vrt, setVrt] = useState(false);
    let navigate = useNavigate();

    const dodajHiso = () => {
        api.post("/hise", {
            hisna_stevilka: hisnaStevilka,
            naslov: naslov,
            velikost: velikost,
            vrt: vrt
        }).then((result) => console.log(result.data));
    }

    return (
        <div>
            <Button variant="contained" onClick={() => navigate("/hise")}>Nazaj na hiše</Button>
            <p>Dodajanje hiše</p>
            <TextField variant="outlined" value={hisnaStevilka} onChange={(event) => setHisnaStevilka(event.target.value)}/><br />
            <TextField variant="outlined" value={naslov} onChange={(event) => setNaslov(event.target.value)}/><br />
            <TextField variant="outlined" value={velikost} onChange={(event) => setVelikost(event.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/><br />
            <Checkbox label={"vrt"} checked={vrt} onChange={(event) => setVrt(event.target.checked)}/> Vrt <br />
            <Button variant="contained" onClick={dodajHiso}>Dodaj</Button>
        </div>
    );
}
export default DodajHiso;