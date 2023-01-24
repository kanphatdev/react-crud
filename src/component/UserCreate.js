import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import "../style/textfield.css";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function UserCreate(params) {

const handleSubmit = event => {
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "fname": fname,
  "lname": lname,
  "username":username,
  "email": email,
  "avatar": avatar
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/create", requestOptions)
  .then(response => response.json())
  .then(result =>{
    alert(result['message']);
    if (result['status']==='ok') {
      window.location.href = '/'
    }
  })
  .catch(error => console.log('error', error));
}


  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [avatar,setAvatar] = useState('');
  return (
    <div>
      <Container maxWidth="sm" sx={{ p: 5 }}>

        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-gl-4 order-last ">
              <TextField
                id="username"
                label="user name"
                multiline
                maxRows={4}
                fullWidth 
                onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div class="col-gl-4  my-4">
              <TextField
                id="fname"
                label="first name"
                multiline
                maxRows={4}
                fullWidth 
                onChange={(e)=>setFname(e.target.value)}
                />
            </div>
            <div class="col-gl-4 my-4">
              <TextField
                id="lname"
                label="last name"
                multiline
                maxRows={4}
                fullWidth 
                onChange={(e)=>setLname(e.target.value)}
                />
            </div>
            <div class="col-gl-4 my-4">
              <TextField
                id="avatar"
                label="avatar"
                multiline
                maxRows={4}
                fullWidth 
                onChange={(e)=>setAvatar(e.target.value)}
                />
            </div>
            <div class="col-gl-4 my-4">
              <TextField
                id="email"
                label="email"
                multiline
                maxRows={4}
                fullWidth 
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
            <Button variant="text" type='submit ' onClick={handleSubmit }>create</Button>
            </div>
            <div class="col-sm-6">
              <Link href='/' underline='none'>
              <Button variant="text">back</Button>
              </Link>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
export default UserCreate;