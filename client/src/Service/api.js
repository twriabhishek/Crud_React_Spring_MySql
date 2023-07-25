import axios from 'axios';
const URL='http://localhost:8080';

//Post Request
export const addUser=async (data)=>{
    try{
        console.log(`${URL}/add`);
       return await axios.post(`${URL}/add`, data);
    } catch(error){
        console.log("error while calling add user Api:", error);
    }
}


//Get Request
export const getUser=async ()=>{
    try{
        console.log(`${URL}/users`);
        return await axios.get(`${URL}/users`);
    } catch(error){
        console.log("error while calling get user Api:", error);
    }
}


//getByOne Request
export const getUsers=async (id)=>{
    try{
        console.log(`${URL}/users/${id}`);
        return await axios.get(`${URL}/users/${id}`);
    } catch(error){
        console.log("error while calling getusers Api:", error);
    }
}


//Update Request
export const editUser=async (user, id)=>{
    try{
        console.log(`${URL}/users/${id}`);
        return await axios.put(`${URL}/users/${id}`, user);
    } catch(error){
        console.log("error while calling getusers Api:", error);
    }
}

//Delete Request
export const deleteUser = async (id)=>{
    try{
        console.log(`${URL}/user/${id}`);
        return await axios.delete(`${URL}/user/${id}`);
    } catch(error){
        console.log("error while calling deleteUser Api:", error);
    }
}