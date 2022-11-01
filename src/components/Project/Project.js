import React from 'react'
import './Project.scss'
export default function Project(props) {
  return (
    <div className='project col-12 col-lg-6 p-3 '>
      {console.log(props)}
        <div className="content m-3 mt-0 d-flex flex-column align-items-center justify-content-center  p-3 pt-0" style={{borderRadius:"20px"}}>
            <h5 className='my-3 color-green'>{props.name}</h5>
           <img src={process.env.PUBLIC_URL + props.image} alt=""  className='img-fluid'  />

           <div className="icons">
           <a href={props.code} className=" me-2  color-green" target='_blank' style={{textDecoration:'none'}}><i className="fa fa-code " aria-hidden="true"></i></a>
          <a href={props.live} className=" ms-2 color-green" target='_blank'><i className="fa fa-eye " aria-hidden="true"></i> </a>
          
          
           </div>

           <p className='color-green w-100' ><span  style={{textDecoration:'underline'}}>Discription</span> :  {props.description}</p>

           <p className='color-green w-100' ><span  style={{textDecoration:'underline'}}>Used Tools</span> {
            props.usedTools.map((tool)=>(
              <img className='skill' width={'20px'} height={'20px'} src={process.env.PUBLIC_URL + tool.image} alt={tool.name}  data-toggle="tooltip" data-placement="top" title={tool.name}/>
            ))
           }</p>




        </div>
    </div>
  )
}
