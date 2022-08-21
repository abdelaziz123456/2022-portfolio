import React from 'react'
import './Project.scss'
export default function Project(props) {
  return (
    <div className='project col-12 col-lg-6 '>
        <div className="content m-3 d-flex flex-column align-items-center justify-content-center  p-3" style={{borderRadius:"20px"}}>
            <h5 className='mb-3 color-green'>{props.name}</h5>
           <img src={props.image} alt=""  className='img-fluid' />
        </div>
    </div>
  )
}
