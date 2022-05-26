import React, { useContext } from 'react'
import { GlobalContext } from '../lib/context'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer:React.FC = () => {
    const { contact } = useContext(GlobalContext)

    return (
        <React.Fragment>
            <Container
                id="contact"
                sx={{
                    backgroundColor: 'rgb(33,175,201)',
                    display:'flex',
                    justifyContent: 'center',
                    padding: '20px 0',
                    maxWidth: '100% !important',
                    // maxWidth - important, overload brakpoint feature
                    }}
                >
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography textAlign='center' color='white' variant='h5'>{contact.title}</Typography>
                    <Typography textAlign='center' color='white'>{contact.contact_email}</Typography>
                    <Typography textAlign='center' color='white'>{contact.phone}</Typography>
                    <Typography textAlign='center' color='white'>{contact.address}</Typography>
                    <Typography textAlign='center' color='white'>MADE WITH</Typography>
                    <Typography textAlign='center' color='white'>
                        <FavoriteIcon/>
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Footer;
