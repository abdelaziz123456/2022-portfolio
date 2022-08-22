import React from 'react'
import './Skill.scss'
export default function Skill(props) {
  return (
    <li className='skill'>
            <img src={process.env.PUBLIC_URL + props.image} alt={props.name} /> {props.name}
    </li>
  )
}
