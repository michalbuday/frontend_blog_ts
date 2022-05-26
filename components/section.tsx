import React from 'react'
import { sectionType } from '../lib/types'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomImage from './image'

export interface sectionInterface {
    section: sectionType
}

const Section:React.FC<sectionInterface> = ({ section }) => {
    const hasImage:Boolean = typeof section.image.data !== 'undefined' && section.image.data != null
    return (
        <React.Fragment>
            <Container 
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    flexWrap: 'wrap',
                    margin: '20px 0',
                    maxWidth: 'xl',
                }}>
            <Box 
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    flexDirection:'column',
                    marginBottom:'auto',
                    maxWidth: { xs: '100%', md: '70%' },
                }}>
                <Box>
                    <Typography
                        variant='h4'
                        textAlign='center'
                        textTransform= 'uppercase'>
                            {section.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography textAlign='center'>
                        {section.description}
                    </Typography>
                </Box>
            </Box>
            {hasImage && 
                <Box sx={{
                    minWidth: { xs:'80%', md:'28%'},
                    minHeight: { xs:'80%', md:'28%'},
                    marginLeft: { xs: 0, md: 'auto' }
                }}>
                    <CustomImage layout='responsive' image={section.image}/>
                </Box>
            }
            </Container>
        </React.Fragment>
    )
}

export default Section
