import React from 'react'
import SectionHeadings from './section-headings'
import { projectsData } from '../lib/data'

function Projects() {
  return (
    <section>
        <SectionHeadings 
            subtitle='Projects'
        />
        <div>
            {projectsData.map((project, index) =>(
                <Project 
                    key={index}
                    {...project}
                />
            ))}
        </div>
    </section>
  )
}

type ProjectProp = (typeof projectsData)[number]

function Project({
    title, 
    description, 
    tags } : ProjectProp){
    return (
        <div >
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>{tags.map((tag, index) =>(
                <li key={index}>{tag}</li>
            ))}</ul>
        </div>
    )
}

export default Projects