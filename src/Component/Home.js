import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box, CircularProgress } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    id: 1,
    name: "Syed Saifu",
    class: 10,
    teacher: "Sagar",
    attendance: 90,
    email: "syedsaifu3@gmail.com",
    marks:{
        english:90,
        maths:86,
        science:89,
        social:70
    }
  },
  {
    id: 1,
    name: "Syed Saifu",
    class: 10,
    teacher: "Sagar",
    attendance: 90,
    email: "syedsaifu3@gmail.com",
    marks:{
        english:90,
        maths:86,
        science:89,
        social:70
    }
  }
];

export default function CustomizedTables() {
    
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "80%", mx: "auto", my: "80px" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Class</StyledTableCell>
            <StyledTableCell align="center">Teacher</StyledTableCell>
            <StyledTableCell align="center">Attendance</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                <Typography conponent="div" sx={{ fontWeight: "bold" }}>
                  {row.name}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography conponent="div" sx={{ fontWeight: "bold" }}>
                  {row.class + "th"}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography conponent="div" sx={{ fontWeight: "bold" }}>
                  {row.teacher}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography conponent="div" sx={{ fontWeight: "bold" }}>
                  <Box sx={{ position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      variant="determinate"
                      value={+row.attendance}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        fontWeight={800}
                      >
                        {row.attendance + "%"}
                      </Typography>
                    </Box>
                  </Box>
                </Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography
                  conponent="div"
                  sx={{ fontWeight: "bold" }}
                  align="center"
                >
                  {row.email}
                </Typography>
              </StyledTableCell>
              <StyledTableCell
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <IconButton >
                  <RemoveRedEyeIcon sx={{color:"black"}}/>
                </IconButton>
                <IconButton>
                  <EditIcon sx={{color:"black"}}/>
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{color:"black"}}/>
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
