import React from 'react'
import Container from '@mui/material/Container'
import { useWindowSize } from '../lib/windowSize'

interface PageContainerInterface {
    children: React.ReactNode
}

const PageContainer:React.FC<PageContainerInterface> = ({ children }) => {
    const size = useWindowSize()
    return (
        <Container sx={{
            minHeight: `${(size.height/100)*80}px`
        }}>
            {children}
        </Container>
    )
}

export default PageContainer
