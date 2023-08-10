import { AppBar, Toolbar, styled } from "@mui/material/";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background-color: #6e839b;
  box-shadow: inset;
`;
const Nav = styled(NavLink)`
  font-size: 20px;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;
const Navbar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Nav to="/">Home </Nav>
          <Nav to="about">About</Nav>
          <Nav to="alluser">Alluser</Nav>
          <Nav to="/adduser">Adduser</Nav>
        </Toolbar>
      </Header>
    </>
  );
};
export default Navbar;
