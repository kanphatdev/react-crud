import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../style/boxshadow.css';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';


function User() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {

          setItems(result);
        },


      )
  }, [])


  const handleDelete = id => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": id
    });
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://www.melivecode.com/api/users/delete", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result['message']);
        if (result['status']==='ok') {
          window.location.reload(false);
        }
      })
      .catch(error => console.log('error', error));
  }
  return (
    <div>

      <Container maxWidth="lg" className='my-5 '>
        <div className='d-flex  mb-3'>
          <div className='me-auto p-2'>
            <Typography variant="h6" gutterBottom className='text-capitalize'>
              user
            </Typography>
          </div>

          <div className='p-2 bd-highlight'>
            <Link href='create' underline="none">
              <Button variant="outlined">create</Button>
            </Link>
          </div>
        </div>
        <Box className='my-2 paper'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1080 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='text-uppercase'>id</TableCell>
                  <TableCell align="right" className='text-capitalize'>avatar</TableCell>
                  <TableCell align="right" className='text-capitalize'>first name</TableCell>
                  <TableCell align="right" className='text-capitalize'>last name</TableCell>
                  <TableCell align="right" className='text-capitalize'>username</TableCell>
                  <TableCell align="right" className='text-capitalize'>select action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="center">
                        <Avatar alt="Remy Sharp" src={row.avatar} />
                      </Box>

                    </TableCell>
                    <TableCell align="right">{row.fname}</TableCell>
                    <TableCell align="right">{row.lname}</TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button onClick={()=> handleDelete(row.id)}>
                          one
                        </Button>
                        <Link href='update' underline="none">
                        <Button>Two</Button>
                        </Link>
                        

                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

      </Container>

    </div>
  );
}



export default User;