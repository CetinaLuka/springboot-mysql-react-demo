import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function HiseTable({hise}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">naslov</TableCell>
            <TableCell align="right">Hišna številka</TableCell>
            <TableCell align="right">Velikost</TableCell>
            <TableCell align="right">Vrt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hise.map((hisa) => (
            <TableRow
              key={hisa.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {hisa.id}
              </TableCell>
              <TableCell align="right">{hisa.naslov}</TableCell>
              <TableCell align="right">{hisa.hisna_stevilka}</TableCell>
              <TableCell align="right">{hisa.velikost}</TableCell>
              <TableCell align="right">{hisa.vrt ? "✔️" : "❌"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}