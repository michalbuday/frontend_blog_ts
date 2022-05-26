import React from 'react'
import Section from './section'
import { sectionType } from '../lib/types'
import Container from '@mui/material/Container'

export interface sectionContainer {
    sections: Array<sectionType>
}

const SectionContainer:React.FC<sectionContainer> = ({ sections }) => {
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
