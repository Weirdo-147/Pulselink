import {React,useState} from 'react';
import { Dialog,Container,Box } from '@mui/material';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'


const UserDetails = () => {
    const [open,setOpen] = useState(true);
    const handleClickOpen = () =>{setOpen(true)};
    const handleClose = () =>{setOpen(false)};
  return (
    <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open User Details
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <Container >
              <DialogTitle className='flex bg-[#b250c3] justify-center items-center font-bold'>User Details</DialogTitle>
                <Box sx={{width:'130vw'}} >
                    <DialogContent sx={{height:'100vh'}} className=''>
                        <Grid container spacing={2} disableEqualOverflow>
                            <Grid item xs={12} sm={1} className='bg-[#74a8e0]'>
                                <input accept="image/*" id="avatar" type="file" style={{ display: 'none' }}/>
                                <label htmlFor="avatar">
                                    <Avatar sx={{ width: 100, height: 100, cursor: 'pointer' }} variant="rounded-full" src="https://mui.com/static/images/avatar/1.jpg" />
                                </label>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField autoFocus margin="dense" id="userId" label="Unique User ID" type="text" fullWidth />
                                <TextField margin="dense" id="description" label="Description" type="text" fullWidth />
                                <TextField margin="dense" id="bio" label="Bio" type="text" fullWidth />  
                            </Grid> 
                        </Grid> 
                    </DialogContent>
                </Box>  
            </Container>
            
        </Dialog>
    </div>
  )
}

export default UserDetails