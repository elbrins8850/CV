import React from 'react'
import { Heading } from "../common/Heading"
import {about} from '../data/dummydata'
import iamge from '../data/images/1.jpg'
export const About = () => {
  return (
    <>
    <section className='about'>
    <div className='container flex'>
        {about.map((nal,i)=>{
            return(
                < >
                    <div className='left' >
                    <img src={iamge} alt='' data-aos='fade-down-right'/>
                    </div>
                 
                <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                    <p>{nal.desc}</p>
                    <p>{nal.desc1}</p>
                    <button>Download CV</button>
                <button className='primaryBtn'>Download CV</button>
                    </div>
                </>
            )
        })}
   </div>
    </section>
    </>
  )
}
