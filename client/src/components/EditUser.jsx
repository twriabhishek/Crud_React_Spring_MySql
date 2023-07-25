import {useState, useEffect} from 'react';

import { FormControl, FormGroup, InputLabel,Input, Typography, styled , Button} from "@mui/material";
import {addUser, getUsers } from '../Service/api'; 
import { Link , useParams} from 'react-router-dom';

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

const EditUser=()=>{

    const [user, setUser] = useState({defaultValue});

    const { id }=useParams();
    useEffect(()=>{
        loadUserDetails();
    }, [])

    const loadUserDetails= async()=>{
        const response=await getUsers(id);
        setUser(response.data);
    }

    const onValuechange=(e)=>{
        console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const EditUsers= async() => {
        await EditUser(user);
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="phone" value={user.phone}/>
                <Button variant="contained" onClick={()=>loadUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}
export default EditUser;