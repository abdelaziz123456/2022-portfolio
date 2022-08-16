import React from 'react'
import './Skill.scss'
export default function Skill(props) {
  return (
    <li className='skill'>
            <img src={props.image} alt={props.name} /> {props.name}
    </li>
  )
}
