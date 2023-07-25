import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// import {deleteUsers} from '../Service/api'

import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled
} from "@mui/material";

import { getUser, deleteUser } from "../Service/api";

const StyledTable=styled(Table)`
width:70%;
margin:50px auto 0 auto;
`

const THead = styled(TableRow)`
&>th{
    font-size: 30px;
}
`

const TBody = styled(TableRow)`
&>td{
    font-size: 15px;
}`

const AllUsers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUser();
    setUser(response.data);
    console.log(response.data);
  };

  const deleteUserdetails = async (id) => {
    console.log("Hello"+{id})
    await deleteUser(id);
    getAllUsers();
  }

  return (
    // <p>Hello from AllUsers</p>
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="error" onClick={()=>deleteUserdetails(user.id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default AllUsers;
