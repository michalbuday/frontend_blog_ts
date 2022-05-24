import React, { useContext } from 'react'
import { GlobalContext } from '../lib/context'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



const Footer:React.FC = () => {
    const { contact } = useContext(GlobalContext)

    return (
        <React.Fragment>
            <Container
                id="contact"
                maxWidth='xl'
                sx={{
                    backgroundColor: 'rgb(33,175,201)',
                    display:'flex',
                    justifyContent: 'center',
                    padding: '20px 0'
                    }}
                >
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography textAlign='center' color='white'>{contact.title}</Typography>
                    <Typography textAlign='center' color='white'>{contact.contact_email}</Typography>
                    <Typography textAlign='center' color='white'>{contact.phone}</Typography>
                    <Typography textAlign='center' color='white'>{contact.address}</Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Footer;