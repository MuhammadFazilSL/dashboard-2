import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

export default function BasicTable(props) {

  let rows = [
    createData("Lasania Chiken Fri", 18908424, "22 Dec 2022", "Approved"),
    createData("Big Baza Bang ", 18908424, "15 Nov 2022", "Pending"),
    createData("Mouth Freshner", 18908424, "29 Feb 2022", "Approved"),
    createData("Cupcake", 18908421, "19 Jan 2022", "Delivered"),
  ];
  
  if(props.selected===2){
    rows = [
      createData("Andrew Thomas", 56543216, "2 Dec 2022", "User"),
      createData("R.D.J", 48465422, "2 Oct 2022", "User"),
      createData("James Bond", 45649842, "2 Jun 2022", "Admin"),
      createData("Henry cavil", 78454554, "2 Jan 2022", "User"),
    ];
  }
  if(props.selected===3){
    rows = [
      createData("Mouth Freshner", 56543216, "2 Dec 2022", "53"),
      createData("Cupcake", 48465422, "2 Oct 2022", "120"),
      createData("Lasania Chiken Fri", 45649842, "2 Jun 2022", "48"),
      createData("Mutton", 78454554, "2 Jan 2022", "97"),
    ];
  }
  const makeStyle=(status)=>{
    if(status === 'Approved')
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Pending')
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else if(status === 'User')
    {
      return{
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Admin')
    {
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
    else if(status === 'Delivered')
    {
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
    else{
      return{
        background: '#fff',
        color: 'black',
      }
    }
  }
  
  return (
      <div className="Table">
      <h3>{props.selected===2 ? "Customer Details" :  props.selected===3 ? "Recent Products" : "Recent Orders" }</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{props.selected===2 ? "Name" :"Products" }</TableCell>
                <TableCell align="left">{props.selected===2 ? "User ID" :  props.selected===3 ? "Product ID" : "Oreder ID" }</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">{props.selected===3 ? "Stock" : "status" }</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
