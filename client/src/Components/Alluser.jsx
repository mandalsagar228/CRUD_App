import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { getUsers, deleteUserDataById } from "../Service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background-color: #373b44;

  .tblcell {
    color: white;
    font-weight: bold;
    font-size: large;
  }
`;
const TBhead = styled(TableRow)`
  .tbcell {
    font-weight: bold;
  }
  .btn {
    margin-top: 4px;
    margin-right: 5px;
    font-weight: bold;
  }
`;

const Alluser = () => {
  const [get, getUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      getUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserById = async (id) => {
    await deleteUserDataById(id);
    getAllUsers();
  };
  return (
    <>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell className="tblcell">ID</TableCell>
            <TableCell className="tblcell">Name</TableCell>
            <TableCell className="tblcell">Username</TableCell>
            <TableCell className="tblcell">Email</TableCell>
            <TableCell className="tblcell">Password</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {get.map((gets) => (
            <TBhead key={gets._id}>
              <TableCell className="tbcell">{gets.userId}</TableCell>
              <TableCell className="tbcell">{gets.Name}</TableCell>
              <TableCell className="tbcell">{gets.Username}</TableCell>
              <TableCell className="tbcell">{gets.Email}</TableCell>
              <TableCell className="tbcell">{gets.Password}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  className="btn"
                  component={Link}
                  to={`/edit/${gets._id}`}
                >
                  Edit
                </Button>

                <Button
                  variant="contained"
                  className="btn"
                  color="secondary"
                  onClick={() => deleteUserById(gets._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBhead>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};
export default Alluser;
