import React from 'react'
import { skills } from '../../utils/Data'
import './skilss.css'

const Skills = () => {
  return (
    <section id='technology' className='skills_container'>
        <div className='skills_description'>
            <h3 className='skill_title'>We use cutting edge technology</h3>
            <p className='skill_description'>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, a pharetra augue. Vestibulum id ligula porta feliz euismod semper. Vivamus sagittis lacus vel augue rutrum faucibus dolor auctor.</p>
        </div>
        <ul className="skills_list">
            {skills.map(({icon}, index) => {
                return(
                    <li  className='d-flex justify-content-center align-items-center flex-column' key={index}>
                        {icon}
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default Skills



 