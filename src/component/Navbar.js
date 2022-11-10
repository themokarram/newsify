import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material';
import { Link } from 'react-router-dom';



export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                   
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 , }}>
                    <Link to="/general" style={{textDecoration:"none" }}> <b >NEWSIFY</b> </Link>
                    </Typography>
                    <Button  color="inherit"><Link to="/general" style={{textDecoration:"none" }}> <b >General</b> </Link> </Button>
                    <Button color="inherit"><Link to="/business" style={{textDecoration:"none" }}> <b>Business</b> </Link></Button>
                    <Button color="inherit"><Link to="/entertainment" style={{textDecoration:"none" }}><b>Entertainment</b></Link></Button>
                    <Button color="inherit"><Link to="/technology" style={{textDecoration:"none" }}><b>Technology</b></Link></Button>
                    <Button color="inherit"><Link to="/health" style={{textDecoration:"none" }}><b>Health</b></Link></Button>
                    <Button color="inherit"><Link to="/science" style={{textDecoration:"none" }}><b>Science</b></Link></Button>
                    <Button color="inherit"><Link to="/sports" style={{textDecoration:"none" }}><b>Sports</b></Link></Button>
                    <Button color="secondary" variant='contained'>Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
