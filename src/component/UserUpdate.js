import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import "../style/textfield.css";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
function UserUpdate(params) {


const handleUpdate = event => {

}
  return (
    <div>
      <Container maxWidth="sm" sx={{ p: 5 }}>

        <form onSubmit={handleUpdate}>
          <div class="row">
            <div class="col-gl-4 order-last ">
              <TextField
                id="username"
                label="user name"
                multiline
                maxRows={4}
                fullWidth 
               
                />
            </div>
            <div class="col-gl-4  my-4">
              <TextField
                id="fname"
                label="first name"
                multiline
                maxRows={4}
                fullWidth 
                
                />
            </div>
            <div class="col-gl-4 my-4">
              <TextField
                id="lname"
                label="last name"
                multiline
                maxRows={4}
                fullWidth 
               
                />
            </div>
            <div class="col-gl-4 my-4">
              <TextField
                id="avatar"
                label="avatar"
                multiline
                maxRows={4}
                fullWidth 
                
                />
            </div>
            <div class="col-gl-4 my-4">
              <TextField
                id="email"
                label="email"
                multiline
                maxRows={4}
                fullWidth 
                
                />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
            <Button variant="text" type='submit ' >update</Button>
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
export default UserUpdate;