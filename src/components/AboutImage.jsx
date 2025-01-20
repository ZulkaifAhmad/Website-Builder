import React  from 'react'
import './AboutParts.css'

function AboutImage({state}) {
  return (
    <>
    {
        state.map((e,i)=>{
        return (
        <div className="img" key={i}>
              <img src={e.img} alt="About Us" />
        </div>
        )
        })
    }
    </>
  )
}

export default AboutImage