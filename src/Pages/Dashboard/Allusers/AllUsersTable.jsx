import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import AgentIcon from '@mui/icons-material/PersonPin';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.palette.mode === 'light' ? 'head' : 'headDark'}`]: {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  [`&.${theme.palette.mode === 'light' ? 'body' : 'bodyDark'}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// ... (previous imports)

const AllUsersMaterialTable = ({ users, handleDeleteUser, handleMakeAdmin, handleMakeAgent, handleFraud }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Make Admin</StyledTableCell>
            <StyledTableCell>Requested Role</StyledTableCell>
         
            <StyledTableCell>Remove User</StyledTableCell>
            <StyledTableCell>Fraud</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{index}</StyledTableCell>
              <StyledTableCell>{user.name}</StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>
               
{
  user.role === 'fraud' ? (
    <span style={{ color: 'red' }}>Fraud</span>
  ) : (
    user.role === 'admin' ? (
      'Admin'
    ) : (
      (user.role === 'agent' || user.role === 'client'|| user.requesterole) ? (
        <Button onClick={() => handleMakeAdmin(user)} variant="outlined" startIcon={<AdminIcon />}>
          Make Admin
        </Button>
      ) : (
        ''
      )
    )
  )
}

              </StyledTableCell>
              <StyledTableCell>
             
           

          
{
  user.role === 'fraud' ? (
    <span style={{ color: 'red' }}>Fraud</span>
  ) : (
    user.role === 'admin' ? (
      'Admin'
    ) : (
      user.role === 'agent' ? (
        'Agent'
      ) : (
        user.requesterole === 'agent' || user.role === 'client' ? (
          <Button onClick={() => handleMakeAgent(user)} variant="outlined" startIcon={<AgentIcon />}>
            Make Agent
          </Button>
        ) : (
          ''
        )
      )
    )
  )
}



              </StyledTableCell>
              <StyledTableCell>
                <Button onClick={() => handleDeleteUser(user)} color="error" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                {user.role === 'fraud' ? (
                  <span style={{ color: 'red' }}>Fraud</span>
                ) : (
                  user.role === 'agent' ? (
                    <Button onClick={() => handleFraud(user)} color="error">
                     MarkasFraud
                    </Button>
                  ) : (
                    <Button disabled color="error">
                      Fraud
                    </Button>
                  )
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsersMaterialTable;
