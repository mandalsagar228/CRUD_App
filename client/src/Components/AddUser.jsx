import { FormControl,FormGroup,Input,InputLabel,Typography,styled,Button} from "@mui/material";
import  { useState } from 'react';
import {addUser} from "../Service/api";
import {useNavigate} from 'react-router-dom';

const Container=styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    .formcntrl{
        margin: 7px;
    }
    .typo{
        font-weight: bold;
    }
`
const defaultValue={
    Name:" ",
    Username:" ",
    Email:" ",
    Password:" "
    

};



const Adduser=()=>{
    const [user,setUser]=useState(defaultValue);
    const navigate=useNavigate();

    const onInputValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }
    const addUserDetails=()=>{
        addUser(user);
        navigate('/alluser')

    }
    return(
        <Container>
            <Typography variant="h4" className="typo">Add User</Typography>
            <FormControl className="formcntrl">
                <InputLabel>Name:</InputLabel>
                <Input  onChange={(e)=>onInputValue(e)} name="Name"/>

            </FormControl>

            <FormControl className="formcntrl">
                <InputLabel>Username:</InputLabel>
                <Input onChange={(e)=>onInputValue(e)} name="Username" />

            </FormControl>
            
            <FormControl className="formcntrl">
                <InputLabel>Email:</InputLabel>
                <Input  onChange={(e)=>onInputValue(e)} name="Email"/>

            </FormControl>
            

            <FormControl className="formcntrl">
                <InputLabel>Password:</InputLabel>
                <Input  onChange={(e)=>onInputValue(e)} name="Password"/>

            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={addUserDetails}> Add User</Button>
            </FormControl>
            
            
        </Container>
       
    )
}
export default Adduser;