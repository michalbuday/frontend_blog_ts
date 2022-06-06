import React from 'react'
import Section from './section'
import { SectionType } from '../lib/types'
import Container from '@mui/material/Container'

export interface SectionContainer {
    sections: Array<SectionType>
}

const SectionContainer:React.FC<SectionContainer> = ({ sections }) => {
    return (
        <React.Fragment>
            <Container maxWidth='xl'>
                {sections.map((section, i) => {
                    return (
                        <div key={i}>
                            <Section section={section}/>
                        </div>
                    )
                })}
            </Container>
        </React.Fragment>
    )
}

export default SectionContainer
