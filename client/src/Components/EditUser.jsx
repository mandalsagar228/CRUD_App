import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { editUserById, getDataById } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  .formcntrl {
    margin: 7px;
  }
  .typo {
    font-weight: bold;
  }
`;
const defaultValue = {
  Name: " ",
  Username: " ",
  Email: " ",
  Password: " ",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  console.log("Data is from user", user);

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadUsersDetails();
  }, []);

  const loadUsersDetails = async () => {
    try {
      const response = await getDataById(id);
      console.log(response.data);
      setUser(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const onInputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editUserDetails = () => {
    editUserById(user, id);
    navigate("/alluser");
  };
  return (
    <Container>
      <Typography variant="h4" className="typo">
        Edit User
      </Typography>
      <FormControl className="formcntrl">
        <InputLabel>Name:</InputLabel>
        <Input
          onChange={(e) => onInputValue(e)}
          name="Name"
          value={user.Name}
        />
      </FormControl>

      <FormControl className="formcntrl">
        <InputLabel>Username:</InputLabel>
        <Input
          onChange={(e) => onInputValue(e)}
          name="Username"
          value={user.Username}
        />
      </FormControl>

      <FormControl className="formcntrl">
        <InputLabel>Email:</InputLabel>
        <Input
          onChange={(e) => onInputValue(e)}
          name="Email"
          value={user.Email}
        />
      </FormControl>

      <FormControl className="formcntrl">
        <InputLabel>Password:</InputLabel>
        <Input
          onChange={(e) => onInputValue(e)}
          name="Password"
          value={user.Password}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={editUserDetails}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};
export default EditUser;
