import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Div = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

const Home = () => {
  const navigate = useNavigate();
  const Navigation = () => {
    navigate("/adduser");
  };
  return (
    <>
      <Div>
        <h1>Welcome</h1>
        <Button variant="contained" onClick={Navigation}>
          Add User
        </Button>
      </Div>
    </>
  );
};
export default Home;
