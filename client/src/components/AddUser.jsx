import {useState} from 'react';

import { FormControl, FormGroup, InputLabel,Input, Typography, styled , Button} from "@mui/material";
import {addUser } from '../Service/api'; 
const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px
}
`
const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''

}

const AddUser=()=>{

    const [user, setUser] = useState({defaultValue});

    const onValuechange=(e)=>{
        console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const addUserDetails= async() => {
        await addUser(user);
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="phone"/>
                <Button variant="contained" onClick={()=>addUserDetails()}>AddUser</Button>
            </FormControl>
        </Container>
    )
}
export default AddUser;